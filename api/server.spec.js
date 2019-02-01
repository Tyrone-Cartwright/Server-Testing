const request = require("supertest");

const server = require("./server.js");

afterEach(async () => {
  await db("resources").truncate();
});

describe("server.js", () => {
  describe("GET / endpoint", () => {
    it("should respond with status code 200 OK", async () => {
      let response = await request(server).get("/");

      expect(response.status).toBe(200);
    });
  });

  describe("POST /resources endpoint", () => {
    it("should add new resource", async () => {
      const body = { name: "wheat" };

      let response = await request(server)
        .post("/resources")
        .send(body);
      expect(response.body).toEqual({ resource: "wheat" });

      response = await request(server)
        .post("/resources")
        .send({ name: "fiber" });
      expect(response.body).toEqual({ resource: "fiber" });
    });
  });
});
