  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

//Like the map method, the filter method uses a  callback function which we pass to the method, 
//and which will be executed on every element of  the array. 
//The callback function must return a test that will evaluate to either true or false.  
//If the array item being tested passes the test in the callback function, it will be included in the results returned by the filter method.  


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21); 
//Just like the map the filter uses dot notation to call a object. This example uses person as the singular.Returning anyone older than 21
console.log(oldEnough);

const paul = people.filter(p => p.name === 'Paul')[0]; 
// Since this callback function is arbitrary,  we could shorten it even further by changing the person parameter to just p. Now our code is looking quite clean and elegant!
//If I want to access the object itself, I could simply append [0] to the end up here to get the  first and only element in the resulting array.
console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Defines a function 'has5yearsExp' that takes a 'skill' object as input
// and returns true if the 'yrsExperience' property of 'skill' is 5 or more,
// otherwise returns false.
const has5yearsExp = skill => skill.yrsExperience >= 5; //---Checks the skills years exprience is higher than 5.

// Defines a function 'hasStrongSkills' that takes a 'student' object as input.
// The function filters the 'student.skills' array by applying the 'has5yearsExp' function to each skill,
// and then checks if the resulting filtered array has a length greater than 0,
// meaning the student has at least one skill with 5 or more years of experience.
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0; //filters the students 

// Uses the 'hasStrongSkills' function to filter the 'students' array, 
// creating a new array called 'candidates' containing only the students with strong skills.
const candidates = students.filter(hasStrongSkills);

// Logs the 'candidates' array to the console.
console.log(candidates);


// The point is, sometimes for more complex  filtering, it’s easier to read if you write  
//your callback function first, and then just pass  it to the filter method, so if you have a complex filter,
//I recommend you do it this way to keep  your code readable and your intentions clear. 

//There’s only one small problem with this  solution, and that’s that when we log the  
//candidates to the console, the variable contains  all their information which is quite verbose.  

const justName = candidates.map(candidate => [candidate.name, candidate.profession]);
//So to counter this we use a map to just pull the user name and profession.
console.log(justName);