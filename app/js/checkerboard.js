var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

var pieces = {  'red'   : [],
                'black' : []};

function setSquare(player, row, col) {
  checkerboard[row][col] = player;
}

function getPieceAt(row, col) {
  return checkerboard[row][col];
}

function makeNull() {
    return null;
}

function clearboard(){
    for (var i = 0 ; i < 8 ; i+=1) {
        checkerboard[i] = checkerboard[i].map(makeNull);
    }
}

function setUpRed(){
    for (var i = 0 ; i < 8 ; i+=2){
        checkerboard[0][i] = 'R';
        checkerboard[2][i] = 'R';
    }
    for (var i = 1 ; i < 8 ; i+=2){
        checkerboard[1][i] = 'R';
    }
}

function setUpBlack(){
    for (var i = 0 ; i < 8 ; i+=2){
        checkerboard[6][i] = 'B';
    }
    for (var i = 1 ; i < 8 ; i+=2){
        checkerboard[5][i] = 'B';
        checkerboard[7][i] = 'B';
    }
}


function checkRed() {
    for (var i = 0 ; i < 8 ; i+=1){
        for (var j = 0 ; j < 8 ; j +=1){
            if (checkerboard[i][j] === 'R'){
                pieces['red'].push([i , j]);
            }
        }
    }
}

function checkBlack() {
    for (var i = 0 ; i < 8 ; i+=1){
        for (var j = 0 ; j < 8 ; j +=1){
            if (checkerboard[i][j] === 'B'){
                pieces['black'].push([i , j]);
            }
        }
    }
}