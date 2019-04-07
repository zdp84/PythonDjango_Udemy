var fn = prompt('What is your First Name?')
var ln = prompt('What is your Last Name?')
var age = prompt('What is the age of you?')
var tall = prompt('Your tall?')
var pet = prompt('Youy\'s pet name')
alert('Thank you for information!')

var res = true

if (fn[0] != ln[0])             {res = res && false}
if (age<=20 || age>=30)         {res = res && false}
if (tall<=170)                  {res = res && false}
if (pet[pet.length-1] != 'y')   {res = res && false}

if (res == true) {
  console.log('Welcome to the Secret chat!')
}
else {
  console.log('Fuck you!')
}
