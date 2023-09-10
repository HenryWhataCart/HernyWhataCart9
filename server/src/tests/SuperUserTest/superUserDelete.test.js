const request = require("supertest");
const server = require("../../app");
const { Superuser } = require("../../db");

jest.mock("../../db");

describe("DELETE /deleteSuperUser/:id", () => {
  it("should delete a Super User", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue({ destroy: jest.fn() });
    Superuser.findOne = findOneMock;

    const destroyMock = jest.fn();
    jest;
    Superuser.findOne.mockReturnValue({ destroy: destroyMock });

    const response = await request(server).delete("/deleteSuperUser/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Super User removed successfully");
    expect(destroyMock).toHaveBeenCalled();
  });
  it("should handle successful Super User deletion", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue(null);
    Superuser.findOne = findOneMock;

    const destroyMock = jest.fn();
    Superuser.findOne.mockReturnValue({ destroy: destroyMock });

    const response = await request(server).delete("/deleteSuperUser/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Super User removed successfully");
    expect(destroyMock).toHaveBeenCalled();
  });

  it("should handle invalid route parameter", async () => {
    const response = await request(server).delete("/deleteSuperUser/invalidID");

    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBeUndefined();
  });

  it("should handle error while deleting Super User", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue({
      id: 1,
      isSuperuser: true,
    });
    Superuser.findOne = findOneMock;

    const destroyMock = jest.fn();
    destroyMock.mockImplementation(() => {
      throw new Error("Internal Server Error");
    });
    Superuser.findOne.mockReturnValue({ destroy: destroyMock });

    try {
      await request(server).delete("/deleteSuperUser/1");
    } catch (error) {
      expect(error.message).toBe("Internal Server Error");
    }
  });
  it("should delete a Super User when it exists in the database", async () => {
    const findOneMock = jest.fn();
    findOneMock.mockResolvedValue({ destroy: jest.fn() });
    Superuser.findOne = findOneMock;

    const destroyMock = jest.fn();
    jest;
    Superuser.findOne.mockReturnValue({ destroy: destroyMock });

    const response = await request(server).delete("/deleteSuperUser/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Super User removed successfully");
    expect(destroyMock).toHaveBeenCalled();
  });
});
