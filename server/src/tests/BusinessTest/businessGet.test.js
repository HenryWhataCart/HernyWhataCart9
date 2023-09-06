const request = require("supertest");
const server = require("../../app");

describe('GET /searchBusiness', function() {
  it('Responds with json', async function() {
    const response = await request(server)
      .get('/searchBusiness')
      .set('Accept', 'application/json')
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

