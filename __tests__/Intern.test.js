const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should set the school value when passed to constructor", () => {
      // Arrange
      const name = "Thomas A. Anderson";
      const id = 1;
      const email = "neo@zion.org";
      const school = "White Rabbit School of Hacking";
      // Act
      const intern = new Intern(name, id, email, school);
      // Assert
      expect(intern.school).toBe(school);
    });
  });
  describe("getSchool", () => {
    it("should return the object's school value when getSchool is called", () => {
      // Arrange
      const name = "Thomas A. Anderson";
      const id = 1;
      const email = "neo@zion.org";
      const school = "White Rabbit School of Hacking";
      const intern = new Intern(name, id, email, school);
      // Act
      const methodResult = intern.getSchool();
      // Assert
      expect(methodResult).toBe(intern.school);
    });
  });
  describe("getRole", () => {
    it("should return 'Intern' when getRole is called", () => {
      // Arrange
      const name = "Thomas A. Anderson";
      const id = 1;
      const email = "neo@zion.org";
      const school = "White Rabbit School of Hacking";
      const intern = new Intern(name, id, email, school);
      // Act
      const methodResult = intern.getRole();
      // Assert
      expect(methodResult).toBe("Intern");
    });
  });
});
