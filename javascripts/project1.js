var firstName = prompt("First Name Please: ")
var lastName = prompt("Last Name Please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet's name? ")
alert ("Thank you very much for the information!")

//Logic
//Four conditions
var nameCond = null;
var ageCond = null;
var heightCond= null;
var petCond = null;

//NAME conditions

if (firstName[0] === lastName[0]) {
  nameCond =true;
}else {
  nameCond = false;
}




//Age conditions
 if (age > 20 && age <30){
   ageCond = true;
 }else {
   ageCond = false;
 }


 //heightCondition

 if (height >= 170) {
   heightCond = true;
 }
 else {
   heightCond = false;
 }

 //PET Name
 if (petName[petName.length-1] === "y") {
   petCond = true;
 }
 else {
   petCond = false;
 }


// check all conditions
if (nameCond && ageCond && heightCond && petCond) {
  console.log("WLECOME SPY!");
}
else {
  console.log("Nothing to see here");
}
