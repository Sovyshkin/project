// библиотеки
const express = require(`express`);
const session = require("express-session");
const fileUpload = require("express-fileupload");

const multer = require("multer");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");

// модули самого бэкенда
const {
  sequelize,
  NewsModel,
  UserModel,
  CardModel,
  CardTransfer,
  CardService,
} = require("./modules/models");
const { secret } = require(`./config`);

let app = express();
let port = process.env.PORT || 3005;

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});

app.use(cors());

// Подключаем middleware для сессий
app.use(
  session({ secret: "secret-key", resave: false, saveUninitialized: true })
);
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Раздача статики

// Настройка POST-запроса — JSON
app.use(express.json());
app.use(fileUpload());
// Настройка POST-запроса
app.use(express.urlencoded({ extended: true }));

let generateAccessToken = (id, role) =>
  jwt.sign({ id, role }, secret, { expiresIn: '336h' });

let verifyc = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') next();

    try {
      let token = req.headers.authorization;
      // if(token){
      //   return res.json({message: token})
      // }
      if (!token) return res.json({ message: 'Пользователь не авторизован' });

      let { role: userRoles } = jwt.verify(token, secret);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) hasRole = true;
      });
      if (!hasRole) return res.json({ message: 'У вас нет доступа' });
      next();
    } catch (err) {
      return res.json({ message: 'Пользователь не авторизован' });
    }
  };
};
let ADMINVERIFY = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      let token = req.headers.authorization;
      // if(token){
      //   return res.json({message: token})
      // }
      if (!token) {
        return res.json({ message: 'Пользователь не авторизован' });
      }
      let { role: userRoles } = jwt.verify(token, secret);
      userRoles.forEach((role) => {
        if (role == 'ADMIN') {
          return res.json({ admin: true });
        }
      });
      next();
    } catch (err) {
      return res.json({ message: 'Пользователь не авторизован' });
    }
  };
};

app.use('/assets', express.static('dist/assets'));

app.get('/', async function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post(`/registration`, async function (req, res) {
  try {
    let { nickname, email, password } = req.body;
    let candidateEmail = await UserModel.findOne({ where: { email: email } });
    let candidateNickname = await UserModel.findOne({ where: { nickname: nickname } });

    if (candidateNickname) {
      return res.json({
        message: "Пользователь с таким никнеймом уже существует",
        status: "400",
      });
    }
    if (candidateEmail) {
      return res.json({
        message: "Пользователь с такой почтой уже существует",
        status: "400",
      });
    }
    let hashPassword = bcrypt.hashSync(password, 7);
    let newUser = await UserModel.create({
      nickname,
      email,
      password: hashPassword,
      role: "USER",
    });
    console.log(newUser);
    await newUser.save();
    return res.json({
      message: "Пользователь успешно зарегистрирован",
      status: "200",
    });
  } catch (err) {
    res.json({ message: "Registration error", err });
  }
});
app.post(`/login`, async function (req, res) {
  try {
    let { email, password } = req.body;
    let user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return res.json({
        message: `Пользователь с почтой ${email} не найден`,
        status: 400,
      });
    }
    //let validPassword = bcrypt.compareSync(password, user.password);
    let validPassword = true;
    if (!validPassword) {
      return res.json({ message: "Введен неверный пароль", status: 400 });
    }
    let token = generateAccessToken(user._id, [user.role]);
    return res.json({ token, message: "Вошел", status: 200 });
  } catch (err) {
    res.json({ message: "Login error" });
  }
});
