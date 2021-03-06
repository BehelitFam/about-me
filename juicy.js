'use strict';

/* Greets user, asks their name, prompts them to answer 5 yes/no questions about my interests, and creates alerts to tell
them if they've answered correctly. Records the number of correct answers and sends a final alert telling the user how 
many questions they have guessed correctly. 
*/

//Creates a counter for correct answers
var guessCount = 0;
console.log('guessCount is ' + guessCount);

//Greeting message 
alert('Hey there! I\'m Rick. You don\'t know me - yet. See if you can guess a little about who I am!');

var name = prompt('But first - what is YOUR name?');
console.log('User entred their name as ' + name);

alert('Nice to meet you, ' + name + '. Let\'s test your guessing abilities.');


// Prompts user to guess whether I like crusts on my sandwich
var crustPref = prompt('Do I prefer to remove the crust from a sandwich?');
crustPref = crustPref.toUpperCase();

var crustResp;

console.log('User entered ' + crustPref);

if (crustPref === 'Y' || crustPref === "YES") {
    console.log('User guessed no crust');
    crustResp = 'Good guess, but I only did that in sixth grade. Finga sammiches don\'t count.';
} else {
    console.log('User guessed I prefer crust');
    crustResp = 'Very astute, ' + name + '. I like my sammiches intact.';
    guessCount ++;
}

console.log('guessCount is ' + guessCount);

alert(crustResp);

// Prompts user to guess whether I like cats
var petPref = prompt('Here\'s an easy one: Do I love kitties?');
petPref = petPref.toUpperCase();

var petResp;

console.log('User entered ' + petPref);

if (petPref === 'Y' || petPref === 'YES') {
    console.log('User thinks I like kitters');
    petResp = 'I love kitties, and they love me.';
    guessCount ++;
} else {
    console.log('User thinks I don\'t love kitties');
    petResp = 'Do you think I\'m some kind of monster, ' + name + '?';
}

console.log('guessCount is ' + guessCount);

alert(petResp);

// Prompts user to guess whether I like pineapple pizza
var pizzaPref = prompt('Next question, ' + name + '. Do I hate pineapple on pizza?');
pizzaPref = pizzaPref.toUpperCase();

var pizzaResp;

console.log('User entered ' + pizzaPref);

if (pizzaPref === 'Y' || pizzaPref === 'YES') { 
    console.log('User doesn\'t think I enjoy the superior pizza');
    pizzaResp = 'I love pineapple pizza. I\'m sad you think I don\'t. It\'s the pinnacle of pizza technology.';
} else {
    console.log('User guessed I liked pineapple on pizza');
    pizzaResp = 'Correct. I\'m glad you think so highly of me, ' + name + '.';
    guessCount ++;
}

console.log('guessCount is ' + guessCount);

alert(pizzaResp);

//Prompts user to guess whether I skate
var skatePref = prompt('Do I look cool enough to be a totally cool skater guy?');
skatePref = skatePref.toUpperCase();

var skateResp;

console.log('User entered ' + skatePref);

if (skatePref === 'Y' || skatePref === 'YES') { 
    console.log('User guessed I\'m cool');
    pizzaResp = 'Correct,';
    guessCount ++;
} else {
    console.log('User thinks I don\'t board');
    pizzaResp = 'Nope,';
}

console.log('guessCount is ' + guessCount);

alert(pizzaResp + ' I do skate! Well, sorta. I can only longboard. No jump tricks, sadly. And I\'m still working on the cool part, to be honest.');

// Prompts user to guess whether I believe in my professional future
var canCode = prompt('Do I think, that I think, that I have what it takes to be a MASTER CODEWIZARD?');
canCode = canCode.toUpperCase();

var codeResp;

console.log('User guessed ' + canCode);

if (canCode === 'Y' || canCode === 'YES') {
    console.log('User thinks I think can do it!');
    codeResp = 'YES I DO! I WON\'T LET YOU DOWN!';
    guessCount++;
} else {
    console.log('User doesn\'t think I believe in myself');
    codeResp = 'HA! WRONG! I BELIEVE IN MYSEEEEELF!';
}

alert(codeResp);

console.log('guessCount is ' + guessCount);

// Gives user an alert telling them how many guesses they got right
var knowMe = '';

if (guessCount === 5) {
    knowMe = ' PERFECTION!';
} else if (guessCount >= 4) {
    knowMe = ' Um.... do we know each other?'
}

console.log('knowMe is \'' + knowMe + '\'');

alert('You guessed ' + guessCount + ' out of 5 questions right!' + knowMe);



