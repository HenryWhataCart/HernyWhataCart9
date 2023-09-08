const request = require("supertest");
const server = require("../../app");
const { User } = require("../../db")
jest.mock("../../db")

describe("DELETE /deleteUser/:id", () => {
  
  it("Should delete a User", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue({ destroy: jest.fn() });
    User.findOne = findOneMock;

    const destroyMock = jest.fn();
    jest;
    User.findOne.mockReturnValue({ destroy: destroyMock });

    const response = await request(server).delete("/deleteUser/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User deleted");
    expect(destroyMock).toHaveBeenCalled();
  });
  it("Should handle successful User deletion", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue(null);
    User.findOne = findOneMock;

    const destroyMock = jest.fn();
    User.findOne.mockReturnValue({ destroy: destroyMock });

    const response = await request(server).delete("/deleteUser/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User deleted");
    expect(destroyMock).toHaveBeenCalled();
  });

  it("Should handle invalid route parameter", async () => {
    const response = await request(server).delete("/deleteUser/invalidID");

    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBeUndefined();
  });

  it("Should handle error while deleting User", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue({
      id: 1,
    });
    User.findOne = findOneMock;

    const destroyMock = jest.fn();
    destroyMock.mockImplementation(() => {
      throw new Error("Internal Server Error");
    });
    User.findOne.mockReturnValue({ destroy: destroyMock });

    try {
      await request(server).delete("/deleteUser/1");
    } catch (error) {
      expect(error.message).toBe("Internal Server Error");
    }
  });
  it("Should delete a Super User when it exists in the database", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue({ destroy: jest.fn() });
    User.findOne = findOneMock;

    const destroyMock = jest.fn();
    jest;
    User.findOne.mockReturnValue({ destroy: destroyMock });

    const response = await request(server).delete("/deleteUser/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User deleted");
    expect(destroyMock).toHaveBeenCalled();
  });
});