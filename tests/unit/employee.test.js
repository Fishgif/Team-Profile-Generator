
const Employee = require("../../src/lib/employee");

// Can instantiate object
it("Can instantiate Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");

})
//   can take in id and set as argument
  it("can set an id via constructor argument", () => {
    const empId = 12;
    const emp = new Employee("jon", empId);
    expect(emp.id).toBe(empId);
  });
  //   can take in email and set as argument
  it("can set email via constructor argument", () => {
    const testEmail = "jon@test.com";
    const emp = new Employee("jon", 12, testEmail);
    expect(emp.email).toBe(testEmail);
  });
   //   can test get name 
  it("can get name via getName()", () => {
    const testName = "jon";
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
  });
  
  it("can get id from getId()", () => {
    const getId = 12;
    const emp = new Employee("jon", getId);
    expect(emp.getId()).toBe(getId);
  });
  
  it("can get email from getEmail()", () => {
    const testGetEmail = "jon@test.com";
    const emp = new Employee("jon", 12, testGetEmail );
    expect(emp.getEmail()).toBe(testGetEmail );
  });
  
  it("get role should return employee", () => {
    const testVal = "Employee";
    const emp = new Employee("jon", 12, "jon@test.com");
    expect(emp.getRole()).toBe(testVal);
  });
  
 
