var findSpecialInteger = function(arr) {
    let count = 1;
    let element = arr[0];
    for (let i = 1 ; i < arr.length ; i++) {

        if ( element == arr[i]) count++;
        else count = 1;
        
        if (count > arr.length / 4) return arr[i];
        
        element = arr[i];
    }

    return element;
};
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));