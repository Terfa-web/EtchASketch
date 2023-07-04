

//create the div container
const container = document.createElement('div')
const pad = document.querySelector('.pad');

//divide the container into default grid size
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16,1fr)';

//append the container to parent div 
pad.appendChild(container);

//assign listener to each node of the container divs
//const tranferProperty = (e) => {

//Array.from(padDivs).forEach(div => {
  //div.addEventListener('click', {
  //take the this.color prop and assing it to the div assignProp);
// // this.classList.add(e.button.multicolor)
//});
//})
//}

//select the buttons from html document
const gridsize = document.querySelector('.gridsize');
const multi = document.querySelector('.multicolor')
const clear = document.querySelector('.clear');


//create the function to change grid size
const changeGrid = () => {
  const userInput = prompt('Enter the value for grid size:');
  container.style.gridTemplateColumns= `repeat(${userInput}, 1fr)`;
  container.style.gridTemplateRows= `repeat(${userInput}, 1fr)`
}

//create functon to clear the grid
const clearGrid = () => {
  container.innerHTML = "";
}

//add an event listeners to buttons
gridsize.addEventListener('click', changeGrid)

clear.addEventListener('click', clearGrid)

const tranferProperty = (e) => {
  const computedStyle = window.getComputedStyle(e.target);
  
  
  const backgroundColor = computedStyle.getPropertyValue('background');

  //get the grid divs from the sketch pad
  const padDivs = document.querySelectorAll('.pad');

  // convert the grid nodes to array and loop through each
  
  console.log(backgroundColor);
}

multi.addEventListener('click', tranferProperty);

