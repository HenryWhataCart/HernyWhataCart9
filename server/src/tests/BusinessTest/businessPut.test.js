const request = require("supertest");
const server = require("../../app");

describe("PUT /updateBusiness/:id", () => {
  it("should handle an incorrect or not found ID", async () => {
    const id = 999;
    const updatedBusinessData = {
      name: "Nuevo Nombre",
      email: "nuevo@correo.com",
      password: "nuevacontraseña",
    };
    const response = await request(server)
      .put(`/updateBusiness/${id}`)
      .send(updatedBusinessData);
    expect(response.status).toBe(500);
  });
  it("should handle a valid ID and updated business data", async () => {
    const id = 1;
    const invalidBusinessData = {};
    const response = await request(server)
      .put(`/updateBusiness/${id}`)
      .send(invalidBusinessData);
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "The id was not found or it is incorrect",
    });
  });
  it("should handle incomplete business data", async () => {
    const id = 1;
    const invalidBusinessData = {};
    const response = await request(server)
      .put(`/updateBusiness/${id}`)
      .send(invalidBusinessData);
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "The id was not found or it is incorrect",
    });
  });

  it("should handle a server down scenario", async () => {
    const id = 1;
    const updatedBusinessData = {
      name: "Nuevo Nombre",
      email: "nuevo@correo.com",
      password: "nuevacontraseña",
    };
    const response = await request(server)
      .put(`/updateBusiness/${id}`)
      .send(updatedBusinessData);
    expect(response.status).toBe(500);
  });
});
