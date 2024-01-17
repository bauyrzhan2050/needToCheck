const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const cors = require("cors");
// ---------------
// добавляем в package.json
// "scripts": {
//     "start": "concurrently \"npm run server\" \"npm run react\"",
//     "react": "react-scripts start",
//     "server": "node server.js",
// ---------------
// устанавливаем
// "body-parser": "^1.20.2",
//     "cors": "^2.8.5",
//     "express": "^4.18.2",
// ---------------
const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.post("/submit", async (req, res) => {
  try {
    const existingData = JSON.parse(await fs.readFile("data.json"));
    const newData = req.body;
    existingData.push(newData);
    await fs.writeFile("data.json", JSON.stringify(existingData, null, 2));
    res.status(200).send("данные прогруженны");
  } catch (error) {
    console.error("ошибка", error);
    res.status(500).send("server error");
  }
  app.listen(PORT, () => {
    console.log(`server was loaded on port ${PORT}`);
  });
});
