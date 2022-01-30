const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.film.findAll().then((film) => res.json(film));
});

router.get("/:filmId", (req, res) => {
  sequelize.models.film.findByPk(req.params.filmId).then((film) => res.json(film));
});

router.post("/", (req, res) => {
  sequelize.models.film
    .create(req.body)
    .then((film) => res.status(201).json(film));
});

router.delete("/:filmId", (req, res) => {
  sequelize.models.film
    .destroy({
      where: { id: req.params.filmId },
    })
    .then(res.json({ msg: "film supp" }));
});

router.patch("/:filmId", (req, res) => {
  sequelize.models.film
    .update(req.body, { where: { id: req.params.filmId } })
    .then((film) => res.status(200).json(film));
});
module.exports = router;
