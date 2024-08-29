/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const visited = [];
    for(let i = 0; i < rows; i++) {
        const col = [];
        for(let j = 0; j < cols; j++) {
            col.push(0);
        }
        visited.push(col);
    }

    const coordinates = [];
    let visitedCoords = 0;

    let direction = 0; // let 0 denote top, 1 denote right, 2 down, 3 left
    let nextCstart = 0;
    let nextRStart = 0;

    while(visitedCoords < rows*cols) {
        if((0 <= rStart && rStart < rows) && (0 <= cStart && cStart < cols) && visited[rStart][cStart] === 0) {
            visited[rStart][cStart] = 1;
            coordinates.push([rStart, cStart]);
            visitedCoords++;
        }

        // prev direction was top, next will be right
        if(direction === 0) {
            if(rStart < 0) {
                cStart = cStart + 1;
                direction = 1; 
                continue;
            }
            if(cStart + 1 < cols && visited[rStart][cStart+1]===1) { //if right is visited, continue on top
                rStart = rStart - 1;
                continue;
            }
            cStart = cStart + 1;
            direction = 1; 
        } else if(direction === 1) { // prev direction was right, next will be down
            if(cStart === cols) {
                rStart = rStart + 1;
                direction = 2;
                continue;
            }
            if(rStart + 1 < rows && visited[rStart+1][cStart]===1) { 
                cStart = cStart + 1;
                continue;
            }
            rStart = rStart + 1;
            direction = 2;
        } else if(direction === 2) { // prev direction was down, next will be left
            if(rStart === rows) {
                cStart = cStart - 1;
                direction = 3;
                continue;
            }
            if(cStart - 1 >= 0 && visited[rStart][cStart-1]===1) { 
                rStart = rStart + 1;
                continue;
            }
            cStart = cStart - 1;
            direction = 3;
        } else { // prev direction was left, next will be top
            if(cStart < 0) {
                rStart = rStart - 1;
                direction = 0;
                continue;
            }
            if(rStart - 1 >= 0 && visited[rStart-1][cStart]===1) { 
                cStart = cStart - 1;
                continue;
            }
            rStart = rStart - 1;
            direction = 0;
        }
    }

    return coordinates;
};

//console.log(spiralMatrixIII(2,4,0,3));
//console.log(JSON.stringify(spiralMatrixIII(3,7,2,4)));
//console.log(spiralMatrixIII(1,4,0,0));
//console.log(spiralMatrixIII(3,7,2,4));
console.log(spiralMatrixIII(3,3,2,0));