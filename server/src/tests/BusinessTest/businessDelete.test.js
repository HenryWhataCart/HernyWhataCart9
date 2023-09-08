const request = require("supertest");
const server = require("../../app");
const { Business } = require("../../db");

describe('DELETE /deleteBusiness/:id', function () {
  it('Responds with json and status 200', async function () {
    const businessData = {
    id: "e378ba49-011d-463e-92e8-63cea63e966f",
    name: "BusinessTesting1",
    phone: "1234567890",
    email: "business@testing.com",
    };
    await Business.create(businessData)

    const response = await request(server)
      .delete(`/deleteBusiness/e378ba49-011d-463e-92e8-63cea63e966f`)
      .set('Accept', 'application/:id')
    expect(response.text).toBe("{\"message\":\"Business deleted successfully\"}")
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe('DELETE /searchBusiness with error', function () {
  it('Responds with error when we send an invalid id', async function() {
    const response = await request(server)
      .delete('/deleteBusiness/invalidId')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(500);
  });
  it('Responds with error when sending non-existent id', async function() {
    const response = await request(server)
      .delete('/deleteBusiness/e478ba49-011d-463e-72e8-63bea63e976F')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(500);
  });
});





