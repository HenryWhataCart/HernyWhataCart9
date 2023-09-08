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
        payload_enqueued:{
            type: DataTypes.JSON,
            allowNull:false
        },
        payload_sent:{
            type: DataTypes.JSON,
            allowNull:false
        },
        payload_delivered:{
            type: DataTypes.JSON,
            allowNull:false
        }
    }, {timestamps: false})
}