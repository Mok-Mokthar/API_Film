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

router.delete("/:avisId", (req, res) => {
  sequelize.models.avis
    .destroy({
      where: { id: req.params.avisId },
    })
    .then(res.json({ msg: "avis supp" }));
});

router.patch("/:avisId", (req, res) => {
  sequelize.models.avis
    .update(req.body, { where: { id: req.params.avisId } })
    .then((avis) => res.status(200).json(avis));
});
module.exports = router;
