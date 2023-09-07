require('dotenv').config()
const { Sequelize } = require('sequelize')
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env
const BusinessModel = require('./models/Business')
const UserModel = require('./models/User')
const SuperuserModel = require('./models/Superuser')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/db_whatacart`,{logging:false, native: false})

BusinessModel(sequelize)
UserModel(sequelize)
SuperuserModel(sequelize)

//Associations

const { User,Superuser,Business } = sequelize.models

//First: business belongs to superuser and superuser has many business
Superuser.hasMany(Business)
Business.belongsTo(Superuser)

//Second: Users belongs to business and business has many user, the forening key is in user, BusinessId
User.belongsTo(Business)
Business.hasMany(User)


module.exports={
    User,
    Business,
    Superuser,
    conn: sequelize,
}