
const Employee = require("../../src/lib/employee");


describe ('Testing Employee class', () => {

    describe('Employee class contain the attribute and methods needed', () => {

        const defaultId = 245;
        const defaultEmail = 'em245@em.com';
        const defaultName = 'Em';

    // expected

    test('if Employee object has been created from the class', () => { 
        const employee = new Employee(245, 'em245@em.com', 'Em')

        expect(employee). toBeInstanceOf(Employee)
        expect(employee). toBeInstanceOf(Object)
    });

    test('should fail if test does not have 3 arguments', () => {

        expect(() => new Employee()).toThrow(Error)
        expect(() => new Employee(defaultId)).toThrow(Error)
        expect(() => new Employee(defaultId, defaultName)).toThrow(Error);
        expect(new Employee(defaultName, defaultId, defaultEmail)).toBeInstanceOf(Employee);
    })

    test('Employee has email', () => {

        // set up environment
        
        // define source of truth
                        
        // execute code
        
        // compare the result 
        expect(true).toBe(false);
    });

    test('Employee has name', () => {
        expect(true).toBe(false);
    });

    test('should have id', () => {
        expect(true).toBe(false);
    })

    test('getName() should return name', () => {

        expect(true).toBe(false);
    })

    test('getId() should return id', () => {

        expect(true).toBe(false);
    })
    test('getEmail() should return email', () => {

        expect(true).toBe(false);
    })
  // un-expected

  test('should break if no argument passed in constructor ', () => {
    expect(true).toBe(false);
});

test('should receive valid email', () => {
    expect(true).toBe(false);

});

});
    });



  

