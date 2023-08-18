//query select the grid box class
// get value for number of boxes in the grid eg 16 for 16 x 16
//create a div element
//add a class of grid to the new div element
//loop to append to grid box
    //while value of number of boxes > 0:
    //append grid to grid box
function generateGridBoxes(gridType = 16){
    let numberOfBoxes = gridType * gridType;
    let gridBoxDiv = document.querySelector('.grid-box');
    while(numberOfBoxes > 0){
        let box = document.createElement('div');
        box.classList.add('grid')
        gridBoxDiv.appendChild(box);
    
        numberOfBoxes --;
    }
}

function addHoverOnGridBox(){
    let box = document.querySelectorAll('.grid');
    box.forEach((div) =>{
        div.addEventListener('mouseover',function(){
            let box = document.querySelectorAll('.grid');
            box.forEach(()=> this.setAttribute('style','background-color: black;'))
        })
    })
}
generateGridBoxes();
addHoverOnGridBox();