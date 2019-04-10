var cells = document.querySelectorAll('td')


for (cell of cells){
  cell.addEventListener('click',function(){
    cell.textContent = "X";
    cell.style.color = 'red';
  })
  // cell.textContent = "X";
  console.log(cell);
}


// cells.addEventListener('click',function(){
//   cells.textContent = "X";
//   // cells.style.color = 'red';
// })
