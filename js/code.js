//PSEUDO-CODE
// generateGridBoxes Function takes in gridType:
    // create variable to store number of squares for each row
    // select class of gridbox in the html
    // loop for the value of gridType to get the number of rows for the gridtype
        // assign a class of row to each row created
        // append each row to gridbox
    //select all elements with a class of row
    //forEach row:
        //loop for the value of number of boxes
            //create a new div
            //assign a class of grid
            //append each div to row
    
function generateGridBoxes(gridType = 16){
    let numberOfBoxes = gridType;
    let gridBoxDiv = document.querySelector('.grid-box');
    while(gridType > 0){
        let row =document.createElement('div');
        row.classList.add('row');
        gridBoxDiv.appendChild(row);
        gridType --;
    }
    let rows = document.querySelectorAll('.row');
    rows.forEach((div) => {
        let count = numberOfBoxes;
        while (count > 0){
            let box = document.createElement('div');
            box.classList.add('grid')
            div.appendChild(box);
            count --;
        }
    });
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