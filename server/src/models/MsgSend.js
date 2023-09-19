const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('MsgSend',{
        id:{
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone:{
            type:DataTypes.BIGINT,
            allowNull: false
        },
        message:{
            type:DataTypes.STRING,
            allowNull:false
        },
        timestamps:{
            type:DataTypes.DATE,
            allowNull:true
        }
    }, {timestamps: false})
} 