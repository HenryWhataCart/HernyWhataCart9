const request = require("supertest");
const server = require("../../app");

describe('GET /searchBusiness', function () {
  it('Responds with json', async function() {
    const response = await request(server)
      .get('/searchBusiness')
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe('GET /searchBusiness, Gets a json of the business of name sent by query', function () {
  it('Responds /searchBusiness?name= with json', async function() {
    const response = await request(server)
      .get(`/searchBusiness?name=`)
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
  

  it('GET /getBusiness?name, Gets the business of name sent by query', async function () {

    const business = {
      name: "Testing",
      email: "Testing@testing.com",
      phone: "3517658955",
    };
    
    const responseCreateBusiness = await request(server)
      .post("/createBusiness")
      .send(business);
    
    
    const responseGetAllBusinesses = await request(server)
      .get('/searchBusiness')
      .set('Accept', 'application/json');

    
    expect(responseGetAllBusinesses.status).toEqual(200);

    
    const matchingBusiness = responseGetAllBusinesses.body.find(b => b.name === business.name);
    expect(matchingBusiness).toBeDefined();
    expect(matchingBusiness.email).toBe(business.email);
    expect(matchingBusiness.phone).toBe(business.phone);
  });
})

//In case of searching for a non-existent company, it returns an empty array
describe('GET /getBusiness?name, sent by query an non-existent name', function () {
  it('Returns an empty json', async function() {
    const response = await request(server)
      .get(`/searchBusiness?name=nonExistentName`)
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.body).toEqual([]);
    expect(response.status).toEqual(200);
  });
});

//In case of incorrectly entering the path
describe('GET /getBusines,invalid route', function () {
  it('Send an error for the invalid route', async function() {
    const response = await request(server)
      .get(`/searchbusinnes`)
      .set('Accept', 'application/json')
    expect(response.req.data).toBe(undefined)
    expect(response.status).toBe(404);
  });
});

