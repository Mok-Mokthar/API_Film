const { DataTypes } = require('sequelize');

function Avis(sequelize) {
    return sequelize.define('avis', {
        note: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        message:{
            type:DataTypes.TEXT
        }
    })
}

module.exports = Avis;