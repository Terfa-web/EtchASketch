

//create child div container and assign css prop
const container = document.createElement('div')
      container.classList.add('container')
      container.style.width = '100%';
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
 
//select the parent div pad from the document 
const pad = document.querySelector('.pad');

//divide the container into default grid size
function createDefaultGrid () {
 let cell;
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
     cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = 'calc(100%/16)';
    cell.style.height = 'calc(100%/16)';
    container.appendChild(cell);
  }
  
}
pad.appendChild(container);
}


//select the buttons from html document
const gridsize = document.querySelector('.gridsize');
const corel = document.querySelector('.corel')
const multi = document.querySelector('.multicolor')
const pink = document.querySelector('.pinkcolor')
const eraser = document.querySelector('.eraser')
const clear = document.querySelector('.clear');

 
//create the function to change grid size

const changeGrid = () => {
  const userInput = prompt('Enter the value for grid size:');
  const num = parseInt(userInput);
   if(num>=100) {
    alert('Enter values less than 100. Thank you')
   }
  container.innerHTML = '';
 
  let newCell;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
     newCell = document.createElement("div");
    newCell.classList.add("newcell");
    newCell.style.width = `calc(100%/${num})`;
    newCell.style.height = `calc(100%/${num})`;
  
    container.appendChild(newCell);
  }  
}


 pad.appendChild(container); 
}

//create function to clear the grid
const clearGrid = () => {
 container.innerHTML = '';
 createDefaultGrid()
}

const tranferProperty = (event) => {
  event.stopPropagation();
  const buttonClassName = event.target.className;

  const container = document.querySelectorAll('.container > div');
  //loop through each node in the container 
  //first convert the nodes to an array lis
  Array.from(container).forEach(div => {
    div.addEventListener('click', (e) => {
      e.stopPropagation();
      e.target.classList.add(buttonClassName);
    })
  })
  
 
 
};


//add event listeners to buttons
corel.addEventListener('click', tranferProperty);
multi.addEventListener('click', tranferProperty);
eraser.addEventListener('click', tranferProperty);
pink.addEventListener('click', tranferProperty);
gridsize.addEventListener('click', changeGrid)
clear.addEventListener('click', clearGrid)



document.addEventListener('DOMContentLoaded', createDefaultGrid);


