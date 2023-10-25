// здесь лежат все модели
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(
    //'a0864360_db',
    //'a0864360_db',
    //'password1',
    // { dialect: 'mysql', host: 'localhost' }
    { dialect: 'sqlite', storage: 'db.sqlite', logging: false }
);

class UserModel extends Model { }
UserModel.init(
    {
        nickname:    { type: DataTypes.STRING, allowNull: false, },
        email:       { type: DataTypes.STRING, allowNull: false, }, 
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
