const Student = require("../../models/Student");

describe("Unit: Student Model", () => {
  it("should create a Student object with name and email", () => {
    const student = new Student({ name: "Ankit", email: "ankit@example.com" });
    expect(student.name).toBe("Ankit");
    expect(student.email).toBe("ankit@example.com");
  });
});
