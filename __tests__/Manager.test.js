const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should set the office value when passed to constructor", () => {
      // Arrange
      const name = "Morpheus";
      const id = 2;
      const email = "morpheus@zion.org";
      const office = "555-0101";
      // Act
      const manager = new Manager(name, id, email, office);
      // Assert
      expect(manager.office).toBe(office);
    });
  });
  describe("getOffice", () => {
    it("should return the object's office value when getOffice is called", () => {
      // Arrange
      const name = "Morpheus";
      const id = 2;
      const email = "morpheus@zion.org";
      const office = "555-0101";
      const manager = new Manager(name, id, email, office);
      // Act
      const methodResult = manager.getOffice();
      // Assert
      expect(methodResult).toBe(manager.office);
    });
  });
  describe("getRole", () => {
    it("should return 'Manager' when getRole is called", () => {
      // Arrange
      const name = "Morpheus";
      const id = 2;
      const email = "morpheus@zion.org";
      const office = "555-0101";
      const manager = new Manager(name, id, email, office);
      // Act
      const methodResult = manager.getRole();
      // Assert
      expect(methodResult).toBe("Manager");
    });
  });
});
