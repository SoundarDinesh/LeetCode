console.log('hello spiral');/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {

    const spiralArray = [];

    let starti =0;
    let endi = matrix.length;
    let startj = 0;
    let endj = matrix[0].length;

    while(starti < endi && startj < endj) {
        for(let j = startj; j < endj; j++) {
            spiralArray.push(matrix[starti][j]);

            console.log(matrix[starti][j]);
        }

        if(starti < endi-1) {
            for(let i = starti + 1; i < endi; i++ ) {
                spiralArray.push(matrix[i][endj-1]);
                console.log(matrix[i][endj-1]);
            }

            if(startj < endj - 1) {
                for(let j = endj -2; j >= startj; j--) {
                    spiralArray.push(matrix[endi - 1][j]);
                    console.log(matrix[endi - 1][j]);
                }
            
                for(let i = endi - 2; i > starti; i--) {
                    spiralArray.push(matrix[i][startj]);
                    console.log(matrix[i][startj]);
                }
        }
    }

    
        starti++;
        startj++;
        endj--;
        endi--;

        // console.log('start i'+ starti);
        // console.log('start j'+ startj);
        // console.log('end i'+ endi);
        // console.log('end h'+ endj);
    }

    return spiralArray;

    //console.log(matrix[starti][endj]);
};

//spiralOrder([[1,2,3,8,25],[4,5,6,34,111],[7,8,9,76,118], [121,42,33,81,90], [1221,422,336,814,902]]);

//spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);

//spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
//spiralOrder([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]);
spiralOrder([[1,3568,878]]);
//spiralOrder([[7],[9],[6]])

//spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]]);

