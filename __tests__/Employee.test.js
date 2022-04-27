const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should set the values of name, id, email when passed to constructor", () => {
      // Arrange
      const name = "Mr. Smith";
      const id = 4;
      const email = "smith@agents.matrix";
      // Act
      const employee = new Employee(name, id, email);
      // Assert
      expect(employee.name).toBe(name);
      expect(employee.id).toBe(id);
      expect(employee.email).toBe(email);
    });
  });
  describe("getName", () => {
    it("should return the object's name value when getName is called", () => {
      // Arrange
      const name = "Mr. Smith";
      const id = 4;
      const email = "smith@agents.matrix";
      const employee = new Employee(name, id, email);
      // Act
      const methodResult = employee.getName();
      // Assert
      expect(methodResult).toBe(employee.name);
    });
  });
  describe("getId", () => {
    it("should return the object's id value when getId is called", () => {
      // Arrange
      const name = "Mr. Smith";
      const id = 4;
      const email = "smith@agents.matrix";
      const employee = new Employee(name, id, email);
      // Act
      const methodResult = employee.getId();
      // Assert
      expect(methodResult).toBe(employee.id);
    });
  });
  describe("getEmail", () => {
    it("should return the object's email value when getEmail is called", () => {
      // Arrange
      const name = "Mr. Smith";
      const id = 4;
      const email = "smith@agents.matrix";
      const employee = new Employee(name, id, email);
      // Act
      const methodResult = employee.getEmail();
      // Assert
      expect(methodResult).toBe(employee.email);
    });
  });
  describe("getRole", () => {
    it("should return 'Employee' when getRole is called", () => {
      // Arrange
      const name = "Mr. Smith";
      const id = 4;
      const email = "smith@agents.matrix";
      const employee = new Employee(name, id, email);
      // Act
      const methodResult = employee.getRole();
      // Assert
      expect(methodResult).toBe("Employee");
    });
  });
});
