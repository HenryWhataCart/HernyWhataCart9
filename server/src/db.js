require('dotenv').config()
const { Sequelize } = require('sequelize')
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env
const BusinessModel = require('./models/Business')
const RolModel = require('./models/Rol')
const UserModel = require('./models/User')
const SuperuserModel = require('./models/Superuser')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/db_whatacart`,{logging:false, native: false})

BusinessModel(sequelize)
RolModel(sequelize)
UserModel(sequelize)
SuperuserModel(sequelize)

//Associations

const { User,Superuser,Business,Rol } = sequelize.models

//First: business belongs to superuser and superuser has many business
Superuser.hasMany(Business)
Business.belongsTo(Superuser)

//Second: Users belongs to business and business has many user, the forening key is in user, BusinessId
User.belongsTo(Business)
Business.hasMany(User)


Rol.belongsTo(Business)
Business.hasMany(Rol)

//Third: User belongs to many Rol, and Rol belongs to many User, N:M, Mid table
User.belongsToMany(Rol, { through: 'user_rol', timestamps: false})
Rol.belongsToMany(User, { through: 'user_rol', timestamps: false})

module.exports={
    User,
    Business,
    Rol,
    Superuser,
    conn: sequelize,
}