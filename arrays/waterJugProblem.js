/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function (x, y, target) {

    const indexesQueue = [[0, 0]];

    const visitedMatrix = [];
    for (let i = 0; i <= x; i++) {
        const row = [];
        for (let j = 0; j <= y; j++) {
            row.push(0);
        }
        visitedMatrix.push(row);
    }

    visitedMatrix[0][0] = 1;

    while (indexesQueue.length > 0) {
        let currentIndex = [...indexesQueue[0]];
        if(target === currentIndex[0] + currentIndex[1]) {
            return true;
        }

        
        //for x
        currentIndex[0] = x;
        if (visitedMatrix[currentIndex[0]][currentIndex[1]] === 0) {
            visitedMatrix[currentIndex[0]][currentIndex[1]] = 1;
            indexesQueue.push(currentIndex);
        }
        currentIndex = [...indexesQueue[0]];
        currentIndex[0] = 0;
        if (visitedMatrix[currentIndex[0]][currentIndex[1]] === 0) {
            visitedMatrix[currentIndex[0]][currentIndex[1]] = 1;
            indexesQueue.push(currentIndex);

        }
        currentIndex = [...indexesQueue[0]];
        const ycap = (y - currentIndex[1]);
        let transferAmount = Math.min(currentIndex[0], ycap);
        currentIndex[0] = currentIndex[0] - transferAmount;
        currentIndex[1] = currentIndex[1] + transferAmount;

        if (visitedMatrix[currentIndex[0]][currentIndex[1]] === 0) {
            visitedMatrix[currentIndex[0]][currentIndex[1]] = 1;
            indexesQueue.push(currentIndex);
            

        }
        currentIndex = [...indexesQueue[0]];

        //for y
        currentIndex[1] = y;
        if (visitedMatrix[currentIndex[0]][currentIndex[1]] === 0) {
            visitedMatrix[currentIndex[0]][currentIndex[1]] = 1;
            indexesQueue.push(currentIndex);
            

        }
        currentIndex = [...indexesQueue[0]];
        currentIndex[1] = 0;
        
        if (visitedMatrix[currentIndex[0]][currentIndex[1]] === 0) {
            visitedMatrix[currentIndex[0]][currentIndex[1]] = 1;
            indexesQueue.push(currentIndex);
            

        }
        currentIndex = [...indexesQueue[0]];
        const xcap = (x - currentIndex[0]);

        transferAmount = Math.min(currentIndex[1], xcap);
        currentIndex[1] = currentIndex[1] - transferAmount;
        currentIndex[0] = currentIndex[0] + transferAmount;
        // currentIndex[1] = Math.max(0, currentIndex[1] - xcap);
        // currentIndex[0] = currentIndex[0] + Math.max(0, currentIndex[1] - xcap);

        if (visitedMatrix[currentIndex[0]][currentIndex[1]] === 0) {
            visitedMatrix[currentIndex[0]][currentIndex[1]] = 1;
            indexesQueue.push(currentIndex);
            currentIndex = [...indexesQueue[0]];

        }

        indexesQueue.splice(0,1);
    }

    return false;
};

console.log(canMeasureWater(4,3,2));