const mongoose = require("mongoose");
const Student = require("../../models/studentModel");

describe("Unit: Student Model", () => {
  it("should create a Student object with name and email", async () => {
    const student = new Student({
      name: "Ankit",
      email: "ankit@example.com"
    });

    expect(student.name).toBe("Ankit");
    expect(student.email).toBe("ankit@example.com");
    expect(student.enrolledCourses).toEqual([]);
  });

  it("should throw validation error if required fields are missing", async () => {
    const student = new Student({});

    let err;
    try {
      await student.validate();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.name).toBeDefined();
    expect(err.errors.email).toBeDefined();
  });
});
