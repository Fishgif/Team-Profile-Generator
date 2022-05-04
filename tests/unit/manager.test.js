

const Manager = require("../../src/lib/manager");

it('Can set office number via constructor argument', () => {
  const testOfficeNum = 999;
  const emp = new Manager("jon", 12, "jon@test.com", testOfficeNum);
  expect(emp.officeNumber).toBe(testOfficeNum);
});

it('getRole() should return Manager', () => {
  const testManager = "Manager";
  const emp = new Manager("jon", 12, "jon@test.com", 999);
  expect(emp.getRole()).toBe(testManager);
});

it('Can get office number via getOffice()', () => {
  const testOffice = 111;
  const emp = new Manager("jon", 12, "jon@test.com", testOffice);
  expect(emp.getOfficeNumber()).toBe(testOffice);
});






























