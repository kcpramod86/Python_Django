//for (statement1; statement2;statement3){
//Execute some code
//}
//statement1 - starts even before the loop begans that could be something like i= 0;
//statement2 - defines the condition for running the loop.somthing like i<5.
//statement3- is executed each time after loop through.something like i++.


//for (var i = 0; i < 5; i++) {
  //console.log("Number is "+i);
//}
// var word = "ABABABABABABABABABAB"
// for (var i = 0; i < word.length; i= i+2) {
  // console.log(word[i]);
// }

// Use a for loop/while to print (console.log())out the word "hello" for 5 times.


var i = 0;
for (var i = 0; i < 5; i++) {
console.log("hello from for loop")
}
var i = 0;
while (i< 5){
  console.log("hello from while loop");
  i++;
}



//Print out odd numbers from 1 to 25 using loops.
//while loops
var i= 1;
while (i<25) {
        {
      if (i%2 !== 0)
        console.log(i);
          }
              i++;
                }


//for loops
var i = 1;
for (var i = 1; i < 25; i++) {
  if (i%2 !== 0)
  console.log(i);
}
