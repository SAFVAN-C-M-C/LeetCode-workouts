// function isPalindrome(str) {
//     let length = 0;
//     let formatedStr = '';
//     let i = 0
//     while (str[i] !== undefined) {
//         let char = str[i].toLowerCase();
//         if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
//             formatedStr+=char;
//         }
//         i++;
//     }
//     while (formatedStr[length] !== undefined) {
//         length++
//     }
//     console.log(formatedStr);
//     for(let j=0;j<length/2;j++){
//         if(formatedStr[j]!==formatedStr[length-1-j]){
//             return false
//         }
//     }

//     return true
// }
// console.log(isPalindrome("malayalam"))
const reset = "\x1b[0m";
const bright = "\x1b[1m";
const dim = "\x1b[2m";
const underscore = "\x1b[4m";
const blink = "\x1b[5m";
const reverse = "\x1b[7m";
const hidden = "\x1b[8m";

const fgBlack = "\x1b[30m";
const fgRed = "\x1b[31m";
const fgGreen = "\x1b[32m";
const fgYellow = "\x1b[33m";
const fgBlue = "\x1b[34m";
const fgMagenta = "\x1b[35m";
const fgCyan = "\x1b[36m";
const fgWhite = "\x1b[37m";

const bgBlack = "\x1b[40m";
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgBlue = "\x1b[44m";
const bgMagenta = "\x1b[45m";
const bgCyan = "\x1b[46m";
const bgWhite = "\x1b[47m";
console.log(fgGreen+"hello"+reset);
console.log(`\x1b[32m hello \x1b[0m`);
console.log(fgBlue + bgRed + bright + 'This text is blue with a red background and bold' + reset);