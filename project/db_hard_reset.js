let { sequelize, UserModel} = require('./modules/models');


const start = async () => 
{

    await sequelize.drop();
    console.log('tables dropped, creating new ones...');

    await sequelize.sync({
        force: true
    });
    console.log('tables synchronized.');

    const newUser = await UserModel.create({
        nickname: 'Sovyshkin',
        email: '3@3.ru',
        phone: '+79228334948',
        password: 'zasada123',
        role: "ADMIN"
    }, );
    
    const otherUser = await UserModel.create({
        nickname: 'name',
        email: 'name@mail.ru',
        password: 'password',
        role: "USER"
    }, );

    console.log('created user...');

    await newUser.save();
    await otherUser.save();
  
    console.log('done.');
}

start()
