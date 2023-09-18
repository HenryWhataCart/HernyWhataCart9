const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('User',{
        id:{
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.BIGINT,
            allowNull:false
        },
        privilege:{
            type: DataTypes.ENUM('Admin','Member'),
            allowNull: false,
        },
        socketId:{
            type:DataTypes.STRING
        }
    }, {timestamps: false});
}