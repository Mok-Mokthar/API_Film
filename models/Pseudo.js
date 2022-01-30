const { DataTypes } = require('sequelize');

function Pseudo(sequelize) {
    return sequelize.define('pseudo', {
        pseudo: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    })
}

module.exports = Pseudo;