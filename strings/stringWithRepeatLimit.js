/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
    const charCountArray = [];
    for (let i = 0; i < 26; i++) {
        charCountArray.push(0);
    }

    for (let i = 0; i < s.length; i++) {
        charCountArray[s.charCodeAt(i) - 97] = charCountArray[s.charCodeAt(i) - 97] + 1;
    }

    let finalString = '';

    for (let i = 25; i >= 0; i--) {

        if (charCountArray[i] != 0) {
            do {
                let repeatCount = 0;
                while (charCountArray[i] != 0 && repeatCount < repeatLimit) {
                    finalString += String.fromCharCode(i + 97);
                    repeatCount++;
                    charCountArray[i] = charCountArray[i] - 1;
                }

                if(charCountArray[i] === 0) {
                    break;
                }

                let j = i -1;
                while(j >= 0) {
                    if (charCountArray[j] != 0) {
                        finalString += String.fromCharCode(j + 97);
                        charCountArray[j] = charCountArray[j] - 1;
                        break;
                    }
                    j--;
                }

                if(j < 0) {
                    break;
                }
            } while (charCountArray[i] != 0);

        }
    }

    return finalString;


};

console.log(repeatLimitedString('aababab', 2));

