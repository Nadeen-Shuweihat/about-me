'use strict'; 

let userName = prompt('What is your name?');
// console.log(userName);
alert('Hey there ' + userName);


let userAnswer = prompt('Do you who am i?')
switch(userAnswer.toLowerCase()){
    case 'y':
    case 'yes':
        alert('Amaazing because i forget who i am sometimes') 
    break;
    case 'n':
    case 'no':
        alert('HMM no worries you will know in a bit')  
    break;
    default:
        alert('okai '+ userAnswer);  
}

alert(userName +', i will ask you now 4 random yes or no question. Be preapared')

let userQues1 = prompt('Do i believe in ghosts?')
// console.log(userQues1)
switch(userQues1.toLowerCase()){
    case 'y':
    case 'yes':
        alert('I think i do') 
    break;
    case 'n':
    case 'no':
        alert('actually i do')  
    break;
    default:
        alert('i know it is a silly to ask an adult about this');  
}

let userQues2 = prompt('Am i older than 25?')
//console.log(userQues2)
switch(userQues2.toLowerCase()){
    case 'y':
    case 'yes':
        alert('no younger') 
    break;
    case 'n':
    case 'no':
        alert('you are right')  
    break;
    default:
        alert('i was born in 1998,calculate it');  
}


let userQues3 = prompt('Can i make myself disappear?')
//console.log(userQues3)
switch(userQues3.toLowerCase()){
    case 'y':
    case 'yes':
        alert('i wish i can but no') 
    break;
    case 'n':
    case 'no':
        alert('you are right')  
    break;
    default:
        alert('i know it is a silly');  
}


let userQues4 = prompt('Do i believe in Santa Claus?')
//console.log(userQues4)
switch(userQues4.toLowerCase()){
    case 'y':
    case 'yes':
        alert('childesh i know') 
    break;
    case 'n':
    case 'no':
        alert('i do actually')  
    break;
    default:
        alert('i know it is silly ');  
}

alert('hope you enjoyed our questions '+ userName);