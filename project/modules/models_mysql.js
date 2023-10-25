// здесь лежат все модели
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(
    'a0864360_db',
    'a0864360_db',
    'password1',
    { dialect: 'mysql', host: 'localhost' }
);

class UserModel extends Model { }
UserModel.init(
    {
        username:    { type: DataTypes.STRING, allowNull: false, },
        surname:     { type: DataTypes.STRING, allowNull: false, }, 
        email:       { type: DataTypes.STRING, allowNull: false, }, 
        phone:       { type: DataTypes.STRING, allowNull: false, }, 
        password:    { type: DataTypes.STRING, allowNull: false, }, 
        role:        { type: DataTypes.STRING, allowNull: false, }, 
    }, 
    { sequelize, modelName: 'UserModel', }
);


// finalize
module.exports = { 
    sequelize, 
    UserModel
}
