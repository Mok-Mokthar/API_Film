const { DataTypes } = require('sequelize');

function Film(sequelize) {
    return sequelize.define('film', {
        titre: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        synopsis: {
            type:DataTypes.TEXT
        },
        realisateur: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    })
}

module.exports = Film;