const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('Contacts',{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        notification:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{timestamps:false})
}
