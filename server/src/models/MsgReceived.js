const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('MsgReceived',{
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
        payload:{
            type: DataTypes.JSON,
            allowNull:false
        },
        timestamp:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, {timestamps: false})
}