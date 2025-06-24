const request = require("supertest");
const app = require("../../server");
const mongoose = require("mongoose");

describe("API: /api/students", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a student", async () => {
    const res = await request(app).post("/api/students").send({
      name: "Test Student",
      email: "test@student.com",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name", "Test Student");
  });

  it("should return all students", async () => {
    const res = await request(app).get("/api/students");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
