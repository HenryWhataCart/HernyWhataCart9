const request = require("supertest");
const server = require("../../app");
const postUser = require("../../controllers/User/postUser");
jest.mock("../../controllers/User/postUser");
describe("POST/createUser", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should create a new user with valid input parameters", async () => {
    // Arrange
    const userData = {
      name: "newUserPost",
      email: "newUserPost@example.com",
      password: "password123",
      phone: 1234567890,
      privilege: "admin",
      rolIdRow: ["998a0c02-4ff1-434c-9108-05cd8c72b873"],
      businessId: "business123",
    };

    const newUser = {
      ...userData,
      id: "generatedUserId",
    };

    postUser.mockResolvedValue(newUser);

    const response = await request(server).post("/createUser").send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(newUser);
  });

  it("should handle missing data and throw an error of the missing data", async () => {
    const user = {
      name: "newUserPost",
      email: "newUserPost@example.com",
      phone: "1234567890",
      privilege: "admin",
      rolIdRow: [1],
      businessId: 1,
    };

    try {
      await postUser(
        undefined,
        user.email,
        user.password,
        user.phone,
        user.privilege,
        user.rolIdRow,
        user.businessId
      );
    } catch (error) {
      expect(error.message).toBe("Name is required");
    }

    try {
      await postUser(
        user.name,
        undefined,
        user.password,
        user.phone,
        user.privilege,
        user.rolIdRow,
        user.businessId
      );
    } catch (error) {
      expect(error.message).toBe("Email is required");
    }

    try {
      await postUser(
        user.name,
        user.email,
        undefined,
        user.phone,
        user.privilege,
        user.rolIdRow,
        user.businessId
      );
    } catch (error) {
      expect(error.message).toBe("Password is required");
    }
    try {
      await postUser(
        user.name,
        user.email,
        user.password,
        undefined,
        user.privilege,
        user.rolIdRow,
        user.businessId
      );
    } catch (error) {
      expect(error.message).toBe("Phone is required");
    }

    try {
      await postUser(
        user.name,
        user.email,
        user.password,
        user.phone,
        undefined,
        user.rolIdRow,
        user.businessId
      );
    } catch (error) {
      expect(error.message).toBe("Privilege is required");
    }
  });
  it("should handle an error during user creation", async () => {
    const userData = {
      name: "newUserPost",
      email: "newUserPost@example.com",
      password: "password123",
      phone: 1234567890,
      privilege: "admin",
      rolIdRow: ["998a0c02-4ff1-434c-9108-05cd8c72b873"],
      businessId: "business123",
    };

    postUser.mockRejectedValue(new Error("User creation failed"));

    const response = await request(server).post("/createUser").send(userData);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "User creation failed" });
  });
  it("should throw an error if the postUser function throws an unexpected error", async () => {
    const userData = {
      name: "newUserPost",
      email: "newUserPost@example.com",
      password: "password123",
      phone: 1234567890,
      privilege: "admin",
      rolIdRow: ["998a0c02-4ff1-434c-9108-05cd8c72b873"],
      businessId: "business123",
    };

    postUser.mockRejectedValue(new Error("Unexpected error"));

    const response = await request(server).post("/createUser").send(userData);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "Unexpected error" });
  });
});
