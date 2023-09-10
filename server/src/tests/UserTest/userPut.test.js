const request = require("supertest");
const server = require("../../app");
const { User } = require("../../db");
const updateUser = require("../../controllers/User/updateUser");
const userUpdated = require("../../handler/User/userUpdate");

describe("PUT /updateUser/:id", () => {
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

    await userUpdated(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "id not found" });
  });

  it("should return a 404 status code and an error message when the user with the provided id is not found", async () => {
    const id = 1;
    const updatedUserData = {
      name: "Updated User",
      email: "updated@example.com",
      password: "newpassword",
      phone: "9876543210",
      privilege: "Admin",
      rolIdRow: [1, 2],
      businessId: 1,
    };

    User.update = jest.fn().mockResolvedValue([0, []]);

    const response = await request(server)
      .put(`/updateUser/${id}`)
      .send(updatedUserData);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "the id was not found or it is incorrect",
    });
  });
  it("should update user information when all fields are provided", async () => {
    // Arrange
    const id = 1;
    const name = "John Doe";
    const email = "john.doe@example.com";
    const password = "password123";
    const phone = "1234567890";
    const privilege = "admin";
    const businessId = 1;
    const updateCount = [1];

    jest.spyOn(User, "update").mockResolvedValue(updateCount);

    const result = await updateUser(
      id,
      name,
      email,
      password,
      phone,
      privilege,
      [],
      businessId
    );

    expect(User.update).toHaveBeenCalledWith(
      {
        name: name,
        email: email,
        password: password,
        phone: phone,
        privilege: privilege,
        BusinessId: businessId,
      },
      { where: { id } }
    );
    expect(result).toEqual({
      message: "User information updated successfully",
    });
  });
  it("should not update user information if no fields are provided", async () => {
    // Arrange
    const id = 1;
    const name = undefined;
    const email = undefined;
    const password = undefined;
    const phone = undefined;
    const privilege = undefined;
    const businessId = undefined;

    const result = await updateUser(
      id,
      name,
      email,
      password,
      phone,
      privilege,
      [],
      businessId
    );

    expect(result).toEqual({
      message: "User information updated successfully",
    });
  });
});
