/*
Task
Write a program to prompt the user for a password. The password should meet all
these requirements:
● The password must be at least 8 characters long.
● The password must contain at least one uppercase letter.
● The password must contain at least one number.
● If the password does not meet all the requirements, the program should
keep asking the user for a new password until they provide a valid one.
Your application should:
● Use readlineSync.question() to prompt a user for input.
● Prompt a user to enter a password.
● Loop through the password to ensure that it meets the password
requirements, using the appropriate iteration statement(s) to do so. Make
sure you consider how iteration affects top-to-bottom execution of your code
and when a while or do-while loop would be more appropriate.
● Return one of the following statements:
○ If the password meets the requirements, a statement to let the user
know they have been successful
○ If the password does NOT meet the requirements, a statement to let
the user know their password does not meet the requirements
*/
// Password Validator Program
const readlineSync = require('readline-sync');
let acceptedPassword = false;
while (!acceptedPassword) {
    let password = readlineSync.question(`Please enter a valid password (8+ characters, at least 1 uppercase letter, and 1 number): `);

    if (password.length < 8) {
        console.log('Your password must be at least 8 characters long.');
        continue;
    }

    let hasUpperCase = false;
    let hasNumber = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (!hasUpperCase) {
        console.log('Your password must contain at least one uppercase letter.');
        continue;
    }

    if (!hasNumber) {
        console.log('Your password must contain at least one number.');
        continue;
    }

    acceptedPassword = true;
    console.log('Password accepted!');
}


