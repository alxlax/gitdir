
/**
 * Requests a new board state from the server's /data route.
 * 
 * @param cb {function} callback to call when the request comes back from the server.
 */
function getData(cb){
    $.get("/data", function(data, textStatus, xhr){
        console.log("Response for /data: "+textStatus);  

        // handle any errors here....

        // draw the board....
        cb(data);  

    }); 
}

/**
 * Draws the board to the #canvas element on the page. 
 *
 * You may find the following links helpful: 
 *  - https://api.jquery.com/
 *  - https://api.jquery.com/append/
 *  - http://www.tutorialspoint.com/jquery/
 *  - http://www.w3schools.com/jquery/ 
 *
 * @param state {object} - an object representing the state of the board.  
 */ 
function drawBoard(state){

  
    var canvas = $("#canvas"); 

    // Change the height and width of the board here...
    // everything else should adapt to an adjustable
    // height and width.
    var W = 600, H = 600; 
    canvas.css("height", H); 
    canvas.css("width", W); 

    // The actual SVG element to add to. 
    // we make a jQuery object out of this, so that 
    // we can manipulate it via calls to the jQuery API. 
    var svg = $(makeSVG(W, H));

    // get board size and grid size
    var boardSize = state.size;
    var boardGrid = W/boardSize;

    // Fill in board background
   svg.append(makeRectangle(0, 0, 600, 600, '#c19a6b'))

    //Create lines on the board
    for(var i = 0; i < boardSize; i++) {
        svg.append(makeLine((boardGrid*i)+(boardGrid/2), 0, (boardGrid*i)+(boardGrid/2), 600, "black", 2));
    }
    for(var i = 0; i < boardSize; i++) {
        svg.append(makeLine(0, (boardGrid*i)+(boardGrid/2), 600, (boardGrid*i)+(boardGrid/2), "black", 2));
    }
 
    //Draw black and white board pieces
    for(var i = 0; i < boardSize; i++) {
        for(var j = 0; j < boardSize; j++) {
            if(state.board[i][j] == 1) {
                svg.append(makeCircle((boardGrid*j)+(boardGrid/2), (boardGrid*i)+(boardGrid/2), boardGrid/2.5, '#000000'));
            }else if(state.board[i][j] == 2) {
                svg.append(makeCircle((boardGrid*j)+(boardGrid/2), (boardGrid*i)+(boardGrid/2), boardGrid/2.5, '#ffffff'));
            }
        }
    }

    // TODO: Implement board drawing. 
    
    //  You will want to append elements to the 
    //  svg variable using the svg.append(....) 
    //  method. 

    // append the svg object to the canvas object.
    canvas.append(svg);


}

function init(){

    // do page load things here...

    console.log("Initalizing Page...."); 
    getData(drawBoard); 
}
