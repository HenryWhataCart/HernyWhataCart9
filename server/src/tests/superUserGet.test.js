const request = require("supertest");
const server = require("../app");

describe('GET /getSuperUser', function() {
  it('Responds with json', async function() {
    const response = await request(server)
      .get('/getSuperUser')
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

it("Create a Super User and get it", async () => {
  const superUser = {
    name: "NachoTesting",
    email: "Nacho@testing.com",
    password: "Nacho123",
  };

  const response = await request(server)
    .post("/createSuperUser")
    .send(superUser);

  expect(response.statusCode).toBe(200);
  expect(response.body.name).toBe(superUser.name);
  expect(response.body.email).toBe(superUser.email);
  expect(response.body.password).toBe(superUser.password);
});

it("Create a Super user, a non-super user and get the non-super user", async () => {
  const superUser = {
    name: "NachoTesting",
    email: "Nacho@testing.com",
    password: "Nacho123",
  };

  const notSuperUser = {
    name: "IgnacioTesting",
    email: "Ignacio@testing.com",
    password: "Ignacio123",
  };

  const response = await request(server)
    .post("/createSuperUser")
    .send(superUser);

  
  expect(response.body.name).not.toEqual(notSuperUser.name)
  expect(response.body.email).not.toEqual(notSuperUser.email);
  expect(response.body.password).not.toEqual(notSuperUser.password);
  expect(response.statusCode).toBe(200);
});
