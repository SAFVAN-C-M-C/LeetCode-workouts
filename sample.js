function isPalindrome(str) {
    let length = 0;
    let formatedStr = '';
    let i = 0
    while (str[i] !== undefined) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
            formatedStr+=char;
        }
        i++;
    }
    while (formatedStr[length] !== undefined) {
        length++
    }
    console.log(formatedStr);
    for(let j=0;j<length/2;j++){
        if(formatedStr[j]!==formatedStr[length-1-j]){
            return false
        }
    }

    return true
}
console.log(isPalindrome("malayalam"))