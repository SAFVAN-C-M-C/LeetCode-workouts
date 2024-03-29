var splitWordsBySeparator = function(words, separator) {
    let res=[];

    for(const word of words){
        let temp=word.split(`${separator}`);
        res.push(...temp)
    }
    return res.filter(a=>a!='')
};
console.log(splitWordsBySeparator(["$easy$","$problem$"],'$'));