const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.avis.findAll().then((avis) => res.json(avis));
});

router.get("/:avisId", (req, res) => {
  sequelize.models.avis.findByPk(req.params.avisId).then((avis) => res.json(avis));
});

router.post("/", (req, res) => {
  sequelize.models.avis
    .create(req.body)
    .then((avis) => res.status(201).json(avis));
});


router.post('/films/:filmId', (req, res ) => {
  if (req.body.note >= 0 && req.body.note <= 5) {
      sequelize.models.avis.create(req.body)
          .then(avisCreated => {
              sequelize.models.avis_tags.create({
                  filmId: req.params.movieId,
                  avisId: avisCreated.id
              })
              res.status(201).json(avisCreated);
          })
  } else {
      res.status(500).json({ message: "note entre 0 et 5 stp"})
  }
})


router.delete("/:avisId", (req, res) => {
  sequelize.models.avis
    .destroy({
      where: { id: req.params.avisId },
    })
    .then(res.json({ msg: "avis supp" }));
});

router.patch("/:avisId", (req, res) => {
  if (req.body.note >= 0 && req.body.note <= 5) {
    sequelize.models.avis.update(req.body,
        {where: {id : req.params.avisId} })
        .then(nbRowsUpdated => {
            res.json(nbRowsUpdated);
        })
    } else {
        res.status(500).json({ message: "note entre 0 et 5 stp"})
    }
});

module.exports = router;
