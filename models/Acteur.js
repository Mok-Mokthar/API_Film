const { DataTypes } = require('sequelize');

function Acteur(sequelize) {
    return sequelize.define('acteur', {
        nom: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    })
}

module.exports = Acteur;