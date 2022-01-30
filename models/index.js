// On a récupéré ce qu'il faut pour initialiser la BDD
const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:datas.db');

const Film = require('./Film')(sequelize, DataTypes);
const Pseudo = require('./Pseudo')(sequelize, DataTypes);
const Acteur = require('./Acteur')(sequelize, DataTypes);
const Avis = require('./Avis')(sequelize, DataTypes);


//un avis appartient à un pseudo
    Avis.belongsToMany(Pseudo, {through: 'pseudos_tags'})
// //un pseudo peut avoir plusieurs avis
    Pseudo.belongsToMany(Avis, {through: 'pseudos_tags'})
// //un film a plusieurs avis
     Film.hasMany(Avis)
// //un film contient plusieurs acteur
    Film.hasMany(Acteur)

Film.belongsToMany(Acteur, {through: 'acteurs_tags'})
Acteur.belongsToMany(Film, {through: 'acteurs_tags'})

Avis.belongsToMany(Film, {through: 'avis_tags'})
Film.belongsToMany(Avis, {through: 'avis_tags'})





// //pseudo a plusieurs avis
//     Pseudo.hasMany(Avis)
// //un avis a un pseudo
//     Avis.belongsTo(Pseudo)

// //un film a plsueirs avis
//     // Film.hasMany(Avis)
//     Avis.belongsToMany(Film, {through: 'film_avis'});
// //un avis est associé à un film
//     // Avis.belongsTo(Film)
//     Film.belongsToMany(Avis, {through: 'film_avis'});

// //un film a plusieurs acteurs
//     Film.belongsToMany(Acteur, { through: 'acteur_film' }) 
// //des acteurs a joué dans plusieurs films
//     Acteur.belongsToMany(Film, { through: 'acteur_film' })





module.exports = sequelize;