const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.acteur.findAll().then((acteur) => res.json(acteur));
});

router.get("/:acteurId", (req, res) => {
  sequelize.models.acteur.findByPk(req.params.acteurId).then((acteur) => res.json(acteur));
});

router.post("/", (req, res) => {
  sequelize.models.acteur
    .create(req.body)
    .then(acteurCree => {res.status(201).json(acteurCree)
    });
});

//si marche pas /films:filmId doit être /film/filmId
router.post('/films/:filmId', (req, res) => {
  sequelize.models.acteur.create(req.body)
      .then(acteurCreated => {
          sequelize.models.acteurs_tags.create({
              filmId: req.params.filmId,
              acteurId: acteurCreated.id
          })
          res.status(201).json(acteurCreated);
      })
})

router.delete("/:acteurId", (req, res) => {
  sequelize.models.acteur
    .destroy({
      where: { id: req.params.acteurId },
    })
    .then(res.json({ msg: "acteur supp" }));
});

router.patch('/:acteurId', (req, res) => {
  sequelize.models.film.update(req.body,
      {where: {id : req.params.acteurId} })
      .then(nbRowsUpdated => {
          res.json(nbRowsUpdated);
      })
})

module.exports = router;
