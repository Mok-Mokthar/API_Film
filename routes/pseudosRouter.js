const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.pseudo.findAll().then((pseudo) => res.json(pseudo));
});

router.get("/:pseudoId", (req, res) => {
  sequelize.models.pseudo.findByPk(req.params.pseudoId).then((pseudo) => res.json(pseudo));
});

router.post("/", (req, res) => {
  sequelize.models.pseudo
    .create(req.body)
    .then((pseudo) => res.status(201).json(pseudo));
});

router.delete("/:pseudoId", (req, res) => {
  sequelize.models.pseudo
    .destroy({
      where: { id: req.params.pseudoId },
    })
    .then(res.json({ msg: "pseudo supp" }));
});

router.patch("/:pseudoId", (req, res) => {
  sequelize.models.pseudo
    .update(req.body, { where: { id: req.params.pseudoId } })
    .then((pseudo) => res.status(200).json(pseudo));
});
module.exports = router;
