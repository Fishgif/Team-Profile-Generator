
const Intern = require("../../src/lib/intern");

it('can set school via constructor', () => {
  const testSchool = "UWA";
  const emp = new Intern("Marc", 1, "jon@test.com", testSchool);
  expect(emp.school).toBe(testSchool);
});

it('getRole() should return Intern', () => {
  const testIntern = "Intern";
  const emp = new Intern("Marc", 1, "jon@test.com", "UCLA");
  expect(emp.getRole()).toBe(testIntern);
});
































