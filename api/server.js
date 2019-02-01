const express = require("express");
const db = require("../data/dbConfig.js");
const resource = require("../resource/resourceModel.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "running" });
});

server.post("/resources", async (req, res) => {
  const { name } = req.body;
  let resPst = await resource.insert(req.body);
  console.log(resPst);

  if (name) {
    res.status(201).json({ name: `${name}` });
  } else {
    res.status(400).end();
  }
});

// server.delete('/resource/:id', async (req, res) () => {
//   const { id } = req.params;
//   const resDel = await db('resource').where({ id }).del();

//   res.status(200).json(resDel);
// })

module.exports = server;
