console.log("hello from our first js file")

let total = 1+3;

if (1 + 1 ===2) {
    console.log("math still works")
}

let random = Math.random()
if (random < 0.5) {
    console.log("your number is less than 0.5!")
    console.log(random);
}

if (random >= 0.5) {
    console.log("your number is greater than 0.5!")
    console.log(random);
}

//prompts lets user enter value
//.toLowerCase will change all user inputs to lower case

const dayOfWeek = prompt('Enter a day').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("ugh i hate mondays");
}   else if (dayOfWeek === "saturday") {
    console.log("yay i love saturdays");
}   else if (dayOfWeek === "friday") {
    console.log("fridays are decent, especially after work");
}   else {
    console.log("meh");
}

//can chaine else ifs together

// //0-5 free
// 5-10 child price $10
// 10-65 adult $20
// 65+ senior $10

const age = 90;

if(age < 5) {
    console.log("you are a baby, you get in for free");
}   else if (age < 10) {
    console.log("you are a child, you pay $10");    
}   else if (age < 65) {
    console.log("you are an adult, you pay $20");
}  else {
    console.log("you are a senior, you pay $10");
}

//order matters
//these are linked