const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Business',{
        id:{
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {timestamps: false});
}