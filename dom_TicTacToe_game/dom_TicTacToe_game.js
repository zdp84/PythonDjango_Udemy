// Get all cells and button DOM
var cells = document.querySelectorAll('td')
var btn = document.querySelector('.btn')

//convert cells NodeList to Array
var objLst = []
for (cell of cells){
  objLst.push(cell)
}

//map the 'click' function to cells
objLst.map(function(cell){
  cell.addEventListener('click',function(){
    var txt = cell.textContent;
      switch (txt) {
        case 'X':
          cell.textContent = 'O'
          break;
        case 'O':
          cell.textContent = ''
          break;
        case '':
          cell.textContent = 'X'
          break;
        default:
          cell.textContent = ''
          break;
      }
  })
})

//refresh table when 'Restart' pressed
btn.addEventListener('click',function(){
  objLst.map(function(cell){
    cell.textContent = ''
  })
})
