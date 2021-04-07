'use strict';

alert ('Hello there !');
alert ('You will see a work that tells the moon MOVE i will sit in your place ');

alert('just kidding,let\'s start by knowing who are you first');

let score = 0;

let userName = prompt('So, first things first What is your name?');
// console.log(userName);
alert('Hey there ' + userName);


function questionOne(){

  let userAnswer = prompt('Do you who am i?');
  switch(userAnswer.toLowerCase()){
  case 'y':
  case 'yes':
    alert('Amaazing because i forget who i am sometimes');
    score++;
    break;
  case 'n':
  case 'no':
    alert('HMM no worries you will know in a bit');
    break;
  default:
    alert('okai '+ userAnswer);
  }
}
questionOne();

alert(userName +', i will ask you now 6 random yes or no question and i will give you a score to each correct answer. Be preapared');

function questionTwo(){
  let userQues1 = prompt('Do i believe in ghosts?');
  // console.log(userQues1)
  switch(userQues1.toLowerCase()){
  case 'y':
  case 'yes':
    alert('I think i do');
    score++;
    break;
  case 'n':
  case 'no':
    alert('actually i do');
    break;
  default:
    alert('i know it is a silly to ask an adult about this');
  }
}
questionTwo();

let userQues2 = prompt('Am i older than 25?');
//console.log(userQues2)
switch(userQues2.toLowerCase()){
case 'y':
case 'yes':
  alert('no younger');
  break;
case 'n':
case 'no':
  alert('you are right');
  score++;
  break;
default:
  alert('i was born in 1998,calculate it');
}


let userQues3 = prompt('Can i make myself disappear?');
//console.log(userQues3)
switch(userQues3.toLowerCase()){
case 'y':
case 'yes':
  alert('i wish i can but no');
  break;
case 'n':
case 'no':
  alert('you are right');
  score++;
  break;
default:
  alert('i know it is a silly');
}


let userQues4 = prompt('Do i believe in Santa Claus?');
//console.log(userQues4)
switch(userQues4.toLowerCase()){
case 'y':
case 'yes':
  alert('childesh i know');
  score++;
  break;
case 'n':
case 'no':
  alert('i do actually');
  break;
default:
  alert('i know it is silly ');
}

let userQues5 = parseInt(prompt('what is my hight'));
for(let i =1; i<4;i++){
  if(userQues5 === 154){
    alert('right');
    score++;
    break;
  }else if(userQues5 > 154){
    console.log(userQues5);
    userQues5=parseInt(prompt('your guess is too high try again'));
  }else if(userQues5 < 154){
    userQues5=parseInt(prompt('your guess is too low try again'));
  }
}
alert('the right answer is 154');

let myFav = ['sabrina','you will never get rich','roman holiday','bewitched'];



for(let i=0; i<6; i++){
  let favMovie = prompt('can you guess my favorite movies?').toLocaleLowerCase();
  if (favMovie===myFav[0] || favMovie===myFav[1] || favMovie===myFav[2] || favMovie===myFav[3]){
    alert('corret ,i see you are a fan to oldies like me ');
    score++;
    break;
  }else ('nope, try getting back in time with the guessing');
}

/*for(let n=0; n<6 ; n++){
     let guess = prompt('can you guess my favorite movies?').toLocaleLowerCase();
     for(let j=0; j<myFav.length;j++){
         if(myFav.includes(guess)){
             alert('yeaay you got it right');
             i=6
             break
         }
     }
     if(n !==6){
         alert('nop ,guess again');
     }
 }*/ // i like it more than the first way

alert('My favorite movies are sabrina 1954, you will never get rich 1941, roman holiday 1953,bewitched 1964');

//if((parseInt(userQues5)=== 154)){alert('you are corresct');}
// else if (for()) - was trying to solve it by nesting the for in the if


alert ('your scores is ' +score);

alert( 'hope you enjoyed the questions '+ userName +' نزلن عيوني لانو منهم');