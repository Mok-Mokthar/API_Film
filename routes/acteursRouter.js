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
    .then((acteur) => res.status(201).json(acteur));
});

router.delete("/:acteurId", (req, res) => {
  sequelize.models.acteur
    .destroy({
      where: { id: req.params.acteurId },
    })
    .then(res.json({ msg: "acteur supp" }));
});

router.patch("/:acteurId", (req, res) => {
  sequelize.models.acteur
    .update(req.body, { where: { id: req.params.acteurId } })
    .then((acteur) => res.status(200).json(acteur));
});
module.exports = router;
