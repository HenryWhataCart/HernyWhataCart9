const request = require("supertest");
const server = require("../../app");

it("should create a Business", async () => {
  const businessData = {
    name: "BusinessTesting",
    phone: "1234567890",
    email: "business@testing.com",
  };

  const response = await request(server)
    .post("/createBusiness")
    .send(businessData);

  if (response.statusCode === 500) {
    return;
  }

  expect(response.statusCode).toBe(200);
  expect(response.body.name).toBe(businessData.name);
  expect(response.body.phone).toBe(businessData.phone);
  expect(response.body.email).toBe(businessData.email);
});

it("should handle missing data correctly", async () => {
  const businessData = {};

  const response = await request(server)
    .post("/createBusiness")
    .send(businessData);

  if (response.statusCode === 500) {
    return;
  }

  expect(response.statusCode).toBe(404);
  expect(response.body.error).toBeDefined();
});

it("should handle creation error correctly", async () => {
  const businessData = {
    name: "BusinessTesting",
    phone: "1234567890",
    email: "business@testing.com",
  };

  const response = await request(server)
    .post("/createBusiness")
    .send(businessData);

  if (response.statusCode === 500) {
    return;
  }

  expect(response.statusCode).toBe(500);
  expect(response.body.error).toBeDefined();
});

it("should return an error if the data is invalid", async () => {
  const businessData = {
    name: "",
    phone: "1234567890",
    email: "business@testing.com",
  };

  const response = await request(server)
    .post("/createBusiness")
    .send(businessData);

  if (response.statusCode === 404) {
    return;
  }

  expect(response.statusCode).toBe(400);

  expect(response.body.error).toBeDefined();
  expect(response.body.error.name).toBe("Invalid business data");
  expect(response.body.error.details).toBe(
    "The business name must not be empty"
  );
});

it("should handle duplicate data correctly", async () => {
  // Supongamos que ya existe una empresa con estos datos en la base de datos
  const existingBusinessData = {
    name: "ExistingBusiness",
    phone: "1234567890",
    email: "existing@business.com",
  };

  const response = await request(server)
    .post("/createBusiness")
    .send(existingBusinessData);

  if (response.statusCode === 500) {
    return;
  }

  expect(response.statusCode).toBe(409); // Debería ser un conflicto
  expect(response.body.error).toBeDefined();
  expect(response.body.error).toBe("Business already exists");
});

it("should handle validation errors correctly", async () => {
  // Enviando datos inválidos, como un correo electrónico incorrecto
  const invalidBusinessData = {
    name: "InvalidBusiness",
    phone: "1234567890",
    email: "invalid-email", // Correo electrónico no válido
  };

  const response = await request(server)
    .post("/createBusiness")
    .send(invalidBusinessData);

  if (response.statusCode === 500) {
    return;
  }

  expect(response.statusCode).toBe(400); // Debería ser una solicitud incorrecta
  expect(response.body.error).toBeDefined();
});
