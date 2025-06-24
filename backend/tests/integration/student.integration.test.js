const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Student = require("../../models/studentModel");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: "test" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Integration: Student DB", () => {
  it("should create and retrieve a student", async () => {
    const student = new Student({ name: "Memory Test", email: "mem@test.com" });
    await student.save();
    const result = await Student.findOne({ email: "mem@test.com" });
    expect(result.name).toBe("Memory Test");
  });
});
