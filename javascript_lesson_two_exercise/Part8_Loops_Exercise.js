/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var cnt = 0
while (cnt < 5){
  console.log('hello')
  cnt++
}


// For Loop
for (var i=0; i<5; i++){
  console.log('hello')
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// While Loop
var cnt = 1
while (cnt <= 25){
  if (cnt%2 == 0){
    console.log(cnt)
  }
  cnt++
}
cnt = undefined

// For Loop
for (var i=1; i<=25; i++){
  if (i%2 == 0){
    console.log(i)
  }
}
