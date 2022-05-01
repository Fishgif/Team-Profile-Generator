const inquirer = require ('inquirer');
const generateHtml = require('./html/generate-html');
const fs = require ('fs');

// lib modules
const Manager = require ('.//src/lib/manager');
const Engineer = require ('.//src/lib/engineer');
const Intern = require ('.//src/lib/intern');

let employeeInfo = [];


// Array object questions asked to user
function prompt(){
    
    return inquirer.prompt([
        
        {
            type: "list",
            message: "Choose the role fo the person to be added",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        },
        // name
        {
            type: "input",
            message: "What is the employees name?",
            name: "name",
        },
    
        // email
        {
            type: "input",
            name: "email",
            message: "What is the employees email?",
        },
        // id
        {
            type: "input",
            name: "id",
            message: "What is the employees id?",
        },
        // Special questions
        {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?",
            when: (answers) => answers.role === "Manager",
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineers github information",
            when: (answers) => answers.role === "Engineer",
        },
        {
            type: "input",
            name: "school",
            message: "Which school is the intern from?",
            when: (answers) => answers.role === "Intern",
        },
        // Add addition employees
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "addAgain"
        }
    ]).then((answers) => {
    
        // create new employee
    
        if(answers.role === 'Manager'){
            employeeInfo.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        }
    
        if (answers.role === "Engineer") {
            employeeInfo.push(
                new Engineer(answers.name,answers.id,answers.email,answers.github)
            );
        }
    
        if (answers.role === "Intern") {
            employeeInfo.push(
                new Intern(answers.name,answers.id,answers.email,answers.intern)
            );
        }
    
        // if new employee selected loop again
        if(answers.addAgain === "yes"){
            return prompt();
        }else{
            // if no \
            // generate html based on the members added
            return createTeam()
        }

    
    });    
}

prompt();

function createTeam () {
    console.log("new guy", employeeInfo)
    fs.writeFileSync(
      "./output/index.html",
      generateHtml(employeeInfo),
      "utf-8"
    );
  }