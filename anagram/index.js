'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the anagram function below.
function anagram(s) {
    const stringLength = s.length;
    
    //If the length of the string is odd it can't be an anagram. Return -1.
    if (stringLength % 2 !== 0) return -1;
    
    //split the string into two even pieces and store in an array
    let compareStrings = [
        s.substr(0, stringLength / 2),
        s.substr(stringLength / 2)
    ];

    //try to find each letter of the first string in the second string. If the character is not found, replace those characters.
    for (var i = 0; i < stringLength / 2; i++) {
        if (compareStrings[1].indexOf[compareStrings[0][i]] !== -1) {
            compareStrings[1] = compareStrings[1].replace(compareStrings[0][i], "");
        }
    }
    return compareStrings[1].length;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}
