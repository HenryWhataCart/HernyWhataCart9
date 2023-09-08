const request = require("supertest");
const server = require("../../app");

describe('GET /userSearch', function () {
  it('Responds with json', async function() {
    const response = await request(server)
      .get('/userSearch')
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe('GET /userSearch, Gets a json of the user of name sent by query', function () {
  it('GET /userSearch?name, Gets the user of name sent by query', async function () {

    const userTesting = {
      name: "TestingUser1",
      email: "Testing1@testing.com",
      password: "Testing1234",
      phone: "35555555",
      privilege: "Admin",
    };
    
    const response3 = await request(server)
    .post("/createUser")
    .send(userTesting);
    
    //Revisar cómo agregarle un busines id para la búsqueda
    const response = await request(server)
      .get(`/userSearch?name=TestingUser1`)
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  })
})

//In case of searching for a non-existent company, it returns an empty array
describe('GET /userSearch?name, sent by query an non-existent name', function () {
  it('Returns an empty json', async function() {
    const response = await request(server)
      .get(`/userSearch?name=nonExistentName`)
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.body).toEqual([]);
    expect(response.status).toEqual(200);
  });
});

//In case of incorrectly entering the path
describe('GET /userSearch,invalid route', function () {
  it('Send an error for the invalid route', async function() {
    const response = await request(server)
      .get(`/userSeeeearch`)
      .set('Accept', 'application/json')
    expect(response.req.data).toBe(undefined)
    expect(response.status).toBe(404);
  });
});