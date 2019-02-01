const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll
  // findById
};

async function insert(resource) {
  // returns [1]
  const [ids] = await db("resources").insert(resource);
  console.log(id);
  return db("resources")
    .where([id])
    .first();
}

async function update(id, resource) {
  return db("resources")
    .where({ id })
    .update(resource);
}

function remove(id) {
  return null;
}

function getAll() {
  return db("resource");
}
