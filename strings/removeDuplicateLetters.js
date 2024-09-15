/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {

    const visited = [];
    const letterArray = [];
    for (i = 0; i < 26; i++) {
        letterArray.push(0);
        visited.push(0);
    }

    for (let i = 0; i < s.length; i++) {
        letterArray[s[i].charCodeAt(0) - 97] = letterArray[s[i].charCodeAt(0) - 97] + 1;
    }

    let lexicalStack = [];

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        const code = letter.charCodeAt(0);

        if (visited[code - 97] === 0) {
            while (lexicalStack.length > 0) {
                const topLetter = lexicalStack.pop();
                const topLetterCode = topLetter.charCodeAt(0);

                if (topLetterCode > code && letterArray[topLetterCode - 97] > 0) {
                    //letterArray[topLetterCode - 97] -= 1;
                    visited[topLetterCode - 97] = 0;
                } else {
                    lexicalStack.push(topLetter);
                    break;
                }
            }

            lexicalStack.push(letter);  
        }

        letterArray[code - 97] -= 1;
        visited[code - 97] = 1;
    }
    return lexicalStack.join('');
};

console.log(removeDuplicateLetters("cbacdcbc"));