// ==================if, else if and else============

let number = 0;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("number is zero");
}

// -------------------Another example---------------

let getNumber = 95;

if(getNumber <=100 &&  getNumber>=80){
    console.log('A+')
} else if(getNumber <80 &&  getNumber>=70){
    console.log('A')
}else if(getNumber <70 &&  getNumber>=60){
    console.log('A-')
}else if(getNumber <60 &&  getNumber>=50){
    console.log('B')
}else if(getNumber <50 &&  getNumber>=40){
    console.log('C')
}else if(getNumber <40 &&  getNumber>=33){
    console.log('D')
}else{
    console.log('fail')
};



// ===================== switch-case ========================

const num = -10;

switch (true) {
  case num > 0:
    console.log("This is positive");
    break;

  case num < 0:
    console.log("This is negative");
    break;

  default:
    console.log("The num is zero");
}

// ------------------Another example-------------

const holiday = "friday";

switch (holiday) {
  case "saturday":
    console.log("It is holiday");
    break;
    case "sunday":
    console.log("It is holiday");
    break;
    case "monday":
    console.log("It is holiday");
    break;
    case "tuesday":
    console.log("It is holiday");
    break;
    case "wednesday":
    console.log("It is holiday");
    break;
    case "friday":
    console.log("It is holiday");
    break;
    // unnecessary=============
    default:
        console.log("It is not holiday") 


}




// =======================Ternary operator==================


let evenNumber = 5;

let result = (evenNumber % 2 === 0 ? 'It is even number': 'It is odd number');

console.log(result)
