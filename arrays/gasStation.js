/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

    let sum = 0;
    const effArr = [];
    for (let i = 0; i < gas.length; i++) {
        const eff = gas[i] - cost[i];
        effArr.push(eff);
        sum += eff;
    }

    if (sum < 0) {
        return -1;
    }

    let start = -1;
    let gain = 0;
    let maxgain = 0;
    let i = 0;
    while (i < effArr.length) {
        if (effArr[i] >= 0) {
            gain += effArr[i];
            let j = i + 1;
            while (j < effArr.length) {
                if (effArr[j] > 0) {
                    gain += effArr[j];
                    j++;
                } else {
                    break;
                }
            }

            if (gain >= maxgain) {
                start = i;
                maxgain = gain;
                gain = 0;
            }

            i = j;
        } else {
            i++;
        }
    }

    return start;
};

console.log(canCompleteCircuit([2,3,4], [3,4,3]));