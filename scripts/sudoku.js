window.onload = function(){
    //var: globle scope 
    //let: local scope
    var pallete = [];
    var board = [];
    var emptyRow = [-1,-1,-1,-1,-1,-1,-1,-1,-1,];
    var currentNum = 1;
    var allCells = [];


    for(let i = 1; i < 10; i++){// get all the numbers in the pallete
        pallete.push(document.getElementById('n' + i));
    }

    for(let i = 0; i < 9; i++){// add rows to the board
        board.push(emptyRow);
    }

    for(let i = 0; i < 9;i++){
        var row = i + 1 + '';
        for(let j = 0; j < 9; j++){
            let column = j + 1 + '';
            let cell = document.getElementById(row + column);
            if(cell.textContent === ''){
                board[i][j] = -1;

            } else {
                board[i][j] = cell.textContent;
            }
        }
    }
    var lastItem = "nothing";
    var previousValue = -1;
    document.addEventListener('click', function(e) {
        
        try {
            let clickedItem = document.getElementById(e.target.id);
            if (currentNum == clickedItem.textContent && clickedItem.id < 100) {
                clickedItem.textContent = '';
                board[clickedItem.id[0]][clickedItem.id[1]] = -1;
                console.log('clear');
            }
            else if(clickedItem.parentElement.id === 'pRow'){
                currentNum = clickedItem.textContent;
                // console.log(currentNum);
            } 
            else if (clickedItem.id < 100 && clickedItem.id > 10) {
                // clickedItem.className = "error";

                previousValue = clickedItem.textContent;
                clickedItem.textContent = currentNum;
                
                console.log(clickedItem.id[0] + ':' + clickedItem.id[1])
                board[clickedItem.id[0] - 1][clickedItem.id[1] - 1] = currentNum;
                console.log(board[clickedItem.id[0] - 1][clickedItem.id[1] - 1]);
                // console.log(currentNum);
                lastItem = clickedItem;

                //get all items with id[0] == clickedItem.id[0]
                let allRows = document.getElementById("sudokuTable").getElementsByTagName("tr");
                allCells = [];
                // console.log("allrows.length == " + allRows.length);
                for(let i = 0; i < allRows.length ; i++){
                    let singleRow = allRows.item(i).getElementsByTagName("td");
                    // console.log(singleRow);
                    for(let j = 0;j < singleRow.length; j++){
                        allCells.push(singleRow.item(j));
                        // console.log("added Item");
                    }
                }
                allCells.forEach(element => {
                    let elementID = element.id;
                    console.log(sameBlock(elementID)  + " " + sameBlock(clickedItem.id));
                    if(elementID[0] == clickedItem.id[0] || elementID[1] == clickedItem.id[1] || sameBlock(elementID) == sameBlock(clickedItem.id)){ // are these elements in the same row or column
                        if(elementID.textContent != -1){  // does the element have a placeholder value
                            if(elementID != clickedItem.id){ // are these the same item
                                if(element.textContent == clickedItem.textContent){
                                    console.log(elementID + ":" + clickedItem.id);
                                    element.className = "error";
                                    clickedItem.className = "error";
                                }
                            }
                        }
                        
                    }
                });
                //do any in the array have a text content == clickeditem.textcontent that do not have an id == clickeditem.id
                //if so set it's and clicked item class to error

            } else if(clickedItem.id === 'undo'){
                lastItem.textContent = previousValue;
                for(let i = 0; i < allCells.length; i++){
                    allCells[i].className = "";
                }
            }
            
   
        } catch (error) {
            console.log(error);
        }
        
        // }if(clickedItem.parentElement.parentElement.id === 'sudokuTable'){
        //     console.log("found it");
        
    }, false);

    function sameBlock(coord) {
        let i = coord[0] - 1;
        let j = coord[1] - 1;
        return Math.floor(j / 3) * 3 + Math.floor(i / 3);
     }
};



