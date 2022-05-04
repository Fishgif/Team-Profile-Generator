const inquirer = require ('inquirer');
const generateHtml = require('./html/generate-html');
const fs = require ('fs');

// lib modules
const Manager = require ('.//src/lib/manager');
const Engineer = require ('.//src/lib/engineer')
const Intern = require ('.//src/lib/intern');

let newEmployeeInfo = [];


// Array object questions asked to use

const questions = async () => {
    const answers = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is Employees name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is Employees name ID number?",
          name: "id",
        },
        {
          type: "input",
          message: "What is Employees email?",
          name: "email",
        },
        {
          type: "list",
          message: "What is the Employees role?",
          name: "role",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
  
      //  console.log(answers);
        // if manager selected, answer these specific question
        if (answers.role === "Manager") {
          const managerAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What is your office number",
                name: "officeNumber",
              },
            ])
            const newManager = new Manager(
              answers.name,
              answers.id,
              answers.email,
              managerAns.officeNumber
            );
            newEmployeeInfo.push(newManager);
            
          // if engineer selected answer these set of questions
        } else if (answers.role === "Engineer") {
          const githubAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What is your GitHub name?",
                name: "github",
              }
            ])
              const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                githubAns.github
              );
              newEmployeeInfo.push(newEngineer);
            
          // if intern selected answer these set of questions
        } else if (answers.role === "Intern") {
          const internAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What university does he attend attend?",
                name: "school",
              },
            ])
            
            const newIntern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              internAns.school
            );
            newEmployeeInfo.push(newIntern);          
        } 
  
  }; //end function
  
  async function promptQuestions() {
    await questions()
      
    
    const addMemberAns = await inquirer
      .prompt([
        {
          name:'addMember',
          type: 'list',
          choices: ['Add a new member', 'Create team'],
          message: "Would you like to create a new team member?"
        }
      ])
  
      if (addMemberAns.addMember === 'Add a new member') {
        return promptQuestions()
      }
      return createTeam();
  }  
  
  promptQuestions();
  

  function createTeam () {
    console.log("New Team Member", newEmployeeInfo)
    fs.writeFileSync(
      "./output/index.html",
      generateHtml(newEmployeeInfo),
      "utf-8"
    );
  }
  
  