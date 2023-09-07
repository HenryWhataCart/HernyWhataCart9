const request = require("supertest");
const server = require("../../app");

describe('GET /getSuperUser, All Super Users', function() {
  it('Responds with json, the json with all super users', async function() {
    const response = await request(server)
      .get('/getSuperUser')
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe('GET /getSuperUser, Gets a json of the super users of name sent by query', function () {
  it('Responds /getSuperUser?name= with json', async function() {
    const response = await request(server)
      .get(`/getSuperUser?name=`)
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
  

  it('GET /getSuperUser?name, Gets the super user of name sent by query', async function () {

    const superUser = {
      name: "IgnacioTesting",
      email: "Ignacio@testing.com",
      password: "Ignacio4321",
    };

    const responseCreateSuperUser = await request(server)
      .post("/createSuperUser")
      .send(superUser);
    
    const response = await request(server)
      .get(`/getSuperUser?name=${superUser.name}`)
      .set('Accept', 'application/json')
    expect(response.body[0].name).toBe(superUser.name);
    expect(response.body[0].email).toBe(superUser.email);
    expect(response.body[0].password).toBe(superUser.password);
    expect(response.status).toEqual(200);
  });
})
  

  



