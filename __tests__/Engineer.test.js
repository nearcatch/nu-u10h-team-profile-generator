const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set the github value when passed to constructor", () => {
      // Arrange
      const name = "Trinity";
      const id = 3;
      const email = "trinity@zion.org";
      const github = "trinity";
      // Act
      const engineer = new Engineer(name, id, email, github);
      // Assert
      expect(engineer.github).toBe(github);
    });
  });
  describe("getGithub", () => {
    it("should return the object's github value when getGithub is called", () => {
      // Arrange
      const name = "Trinity";
      const id = 3;
      const email = "trinity@zion.org";
      const github = "trinity";
      const engineer = new Engineer(name, id, email, github);
      // Act
      const methodResult = engineer.getGithub();
      // Assert
      expect(methodResult).toBe(engineer.github);
    });
  });
  describe("getRole", () => {
    it("should return 'Engineer' when getRole is called", () => {
      // Arrange
      const name = "Trinity";
      const id = 3;
      const email = "trinity@zion.org";
      const github = "trinity";
      const engineer = new Engineer(name, id, email, github);
      // Act
      const methodResult = engineer.getRole();
      // Assert
      expect(methodResult).toBe("Engineer");
    });
  });
});
