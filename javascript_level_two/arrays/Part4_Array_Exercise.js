// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

function addNew(roster){
  roster.push(prompt('Add a new name:'));
  return roster;
}

// REMOVE STUDENT
function remove(roster){
  delName = prompt('Add a deleted name:')
  roster = roster.filter(x => x !== delName)
  return roster
}

// DISPLAY ROSTER
function display(roster){
  console.log(roster);
}

function exit(){

}
askMe = true;
do{
  switch (prompt('Choose an action:')) {
    case 'add':
      roster = addNew(roster);
      break;
    case 'remove':
      roster = remove(roster);
      break;
    case 'display':
      display(roster);
      break;
    case 'exit':
      askMe = false;
      alert('Good Bye!')
      break;
    default:
      askMe = false;
      alert('Good Bye!')
  }
}while(askMe)
