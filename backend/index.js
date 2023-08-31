const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");
const PORT = process.env.PORT || 5000;
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Server working");
});

app.post("/personal", async (req, res) => {
  const { age, community, gender, occupation, practice, size, source, treat } =
    req.body;

  const id = uuidv4();
  try {
    const response = await pool.query(
      "INSERT INTO personalInfo(id,community,occupation,household,gender,agerange,watersource,watertreat,soapandwater) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)",
      [id, community, occupation, size, gender, age, source, treat, practice]
    );
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

app.post("/hygiene", async (req, res) => {
  const {
    clean,
    dispose,
    excrete,
    pic,
    infectedfrom,
    infection,
    publictoilet,
    sick,
    sickness,
    toilet,
    other,
  } = req.body;

  const id = uuidv4();
  console.log(pic);

  try {
    const response = await pool.query(
      "INSERT INTO personalHygiene(id,clean,excrete,image,publictoilet,sickness,sickcount,infection,toilet,infectedfrom,dispose,other) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
      [
        id,
        clean,
        excrete,
        pic,
        publictoilet,
        sickness,
        sick,
        infection,
        toilet,
        infectedfrom,
        dispose,
        other,
      ]
    );
    if (response) {
      res.send(pic);
    }
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
