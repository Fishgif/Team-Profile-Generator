

const Engineer = require("../../src/lib/engineer");

it('can set Github account', () => {
  const testGithub = "GitHub";
  const emp = new Engineer("jon", 12, "jon@test.com", testGithub );
  expect(emp.github).toBe(testGithub );
});

it('can get GitHub username via getGithub()', () => {
  const testGithubUser= "GitHubUser";
  const emp = new Engineer("Marc", 12, "jon@test.com", testGithubUser);
  expect(emp.getGithub()).toBe(testGithubUser);
})

it('getRole() should return Engineer', () => {
    const testEngineer = "Engineer";
    const emp = new Engineer("MArc", 12, "jon@test.com", "GitHubUser");
    expect(emp.getRole()).toBe(testEngineer);
  });

















