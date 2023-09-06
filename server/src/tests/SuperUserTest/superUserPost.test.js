const request = require("supertest");
const server = require("../../app");

describe("POST /createSuperUser", () => {
  it("should create a Super User", async () => {
    const superUser = {
      name: "MatiasTesting",
      email: "matias@testing.com",
      password: "testingpsw",
    };
    const response = await request(server)
      .post("/createSuperUser")
      .send(superUser);
    expect(response.statusCode).toBe(200);
  });
});
it("should handle missing data correctly", async () => {
  const superUser = {};

  const response = await request(server)
    .post("/createSuperUser")
    .send(superUser);

  expect(response.statusCode).toBe(404);

  expect(response.body.error).toBeDefined();
});

it("should create a Super User with valid data", async () => {
  const superUser = {
    name: "MatiasTesting",
    email: "matias@testing.com",
    password: "testingpsw",
  };

  const response = await request(server)
    .post("/createSuperUser")
    .send(superUser);

  expect(response.statusCode).toBe(200);

  expect(response.body.name).toBe(superUser.name);
  expect(response.body.email).toBe(superUser.email);
});

it("should handle creation error correctly", async () => {
  const superUser = {
    name: "MatiasTesting",
    email: "matias@testing.com",
    password: "testingpsw",
  };

  const response = await request(server)
    .post("/createSuperUser")
    .send(superUser);

  expect(response.body.error).toBeUndefined();
});


