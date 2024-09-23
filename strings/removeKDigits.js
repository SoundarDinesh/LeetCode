/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {

    if(k === num.length) {
        return '0';
    }

    const minStack = [parseInt(num.charAt(0))];

    let remStr ='';
    for(let i =1; i < num.length; i++) {
        const number = parseInt(num.charAt(i));

        while(minStack.length > 0) {
            if(number < minStack[minStack.length - 1]) {
                minStack.pop();
                k--;
                if(k === 0) {
                    remStr = num.substring(i);
                    break;
                }
            } else if(number >= minStack[minStack.length - 1]) {
                break;
            }
        }

        if(k === 0) {
            break;
        }

        minStack.push(number);
    }

    let retStr = minStack.join('') + remStr;
    retStr = retStr.substring(0, retStr.length - k);

    while(retStr.length > 1) {
        if(retStr.charAt(0) === '0') {
            retStr = retStr.substring(1);
        } else {
            break;
        }

    }


    return retStr;
    
};

console.log(removeKdigits('765028321', 3));