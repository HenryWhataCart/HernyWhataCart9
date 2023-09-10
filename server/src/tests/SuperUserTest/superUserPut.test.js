const request = require("supertest");
const server = require("../../app");
const { Superuser } = require("../../db");
const updateSuperUser = require("../../controllers/SuperUser/updateSuperUser");
const superUserPut = require("../../handler/SuperUser/putSuperUser");

describe("PUT /updateSuperuser/:id", () => {
  it("should handle incomplete superuser data", async () => {
    const id = 1;
    const invalidSuperuserData = {};
    const response = await request(server)
      .put(`/updateSuperuser/${id}`)
      .send(invalidSuperuserData);
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "The id was not found or it is incorrect",
    });
  });

  it("should handle a server down scenario", async () => {
    const id = 1;
    const updatedSuperuserData = {
      name: "Nuevo Nombre",
      email: "nuevo@correo.com",
      password: "nuevacontraseña",
    };
    jest.spyOn(Superuser, "update").mockImplementation(() => {
      throw new Error("Server down");
    });
    const response = await request(server)
      .put(`/updateSuperuser/${id}`)
      .send(updatedSuperuserData);
    expect(response.status).toBe(500);

    jest.restoreAllMocks();
  });

  it("should throw an error if the provided id is not found", async () => {
    const id = 1;
    const name = "matiasc";
    const email = "matiasc@example.com";
    const password = "password123";

    Superuser.update = jest.fn().mockResolvedValue([0, []]);

    await expect(updateSuperUser(id, name, email, password)).rejects.toThrow(
      "The id was not found or it is incorrect"
    );
  });
  it("should return a 404 status code and an error message when id is not provided", async () => {
    const req = {
      params: {},
      body: {
        name: "matiasc",
        email: "matiasc@example.com",
        password: "password123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await superUserPut(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "id not found" });
  });
  it("should return a 200 status code and a success message when valid data is provided", async () => {
    const id = 1;
    const updatedSuperuserData = {
      name: "matiasc",
      email: "matiasc@example.com",
      password: "password123",
    };

    // Implementa una lógica de actualización exitosa en Superuser.update
    Superuser.update = jest.fn().mockResolvedValue([1, [updatedSuperuserData]]);

    const response = await request(server)
      .put(`/updateSuperuser/${id}`)
      .send(updatedSuperuserData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Updated Superuser information" });
  });
});
