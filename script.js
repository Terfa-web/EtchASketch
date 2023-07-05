

//create child div container and assign css prop
const container = document.createElement('div')
      container.classList.add('container')
      container.style.width = '100%';
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
 
//select the parent div pad from the document 
const pad = document.querySelector('.pad');

//divide the container into default grid size
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



//select the buttons from html document
const gridsize = document.querySelector('.gridsize');
const multi = document.querySelector('.multicolor')
const pink = document.querySelector('.pinkcolor')
const clear = document.querySelector('.clear');

 
//create the function to change grid size

const changeGrid = () => {
  const userInput = prompt('Enter the value for grid size:');
  const num = parseInt(userInput);
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
}

//add an event listeners to buttons
gridsize.addEventListener('click', changeGrid)

clear.addEventListener('click', clearGrid)


const tranferProperty = (event) => {
  const buttonClassName = event.target.className;

  const container = document.querySelectorAll('.container > div');
  //loop through each node in the container 
  //first convert the nodes to an array lis
  Array.from(container).forEach(div => {
    div.addEventListener('mouseover', (e) => {
      e.target.classList.add(buttonClassName);
    }, {
      
    })
  })
  
 
 
};


multi.addEventListener('click', tranferProperty);
pink.addEventListener('click', tranferProperty);

