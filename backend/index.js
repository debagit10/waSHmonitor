const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");
const PORT = process.env.PORT || 5000;
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "debacodes",
  api_key: "637575965933943",
  api_secret: "2l69-9Asmo8oncTPLzKdMowlplQ",
});

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
    image,
    infectedfrom,
    infection,
    publictoilet,
    sick,
    sickness,
    toilet,
    other,
  } = req.body;

  const id = uuidv4();
  console.log(image);

  try {
    const pic = await cloudinary.uploader.upload(image);
    console.log(pic);
    const response = await pool.query(
      "INSERT INTO personalHygiene(id,clean,excrete,image,publictoilet,sickness,sickcount,infection,toilet,infectedfrom,dispose,other) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
      [
        id,
        clean,
        excrete,
        image,
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
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
