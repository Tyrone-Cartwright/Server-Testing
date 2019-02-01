const request = require("supertest");

const db = require("../data/dbConfig.js");
const resourceModel = require("./resourceModel.js");

afterEach(async () => {
  await db("resources").truncate();
});

describe("resource model", () => {
  it("should insert provided resource", async () => {
    const resource = await resourceModel.insert({ name: "water " });

    const resources = await db("resources");
    expect(resources).toHaveLength(1);
    expect(resource.name).toBe("water");
  });
});
