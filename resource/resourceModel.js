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
  try {
    const [id] = await db("resources").insert(resource);
    console.log(id);
    return await db("resources")
      .where({ id })
      .first();
  } catch (err) {
    console.log(error);
  }
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
