const express = require('express');
const cors = require('cors');
const sequelize = require('./models');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const acteursRouter = require("./routes/acteursRouter");
app.use("/acteurs", acteursRouter);

const avisRouter = require("./routes/avisRouter");
app.use("/avis", avisRouter);

const filmsRouter = require("./routes/filmsRouter");
app.use("/films", filmsRouter);

const pseudosRouter = require("./routes/pseudosRouter");
app.use("/pseudos", pseudosRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Db connected");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });