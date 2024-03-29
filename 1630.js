var checkArithmeticSubarrays = function(nums, l, r) {
    const res=[];
    let m=l.length;
    for(let i=0;i<m;i++){
        var temp=[];
        for(let j=l[i];j<=r[i];j++){
            temp.push(nums[j]);
        }
        temp.sort((a,b)=>a-b);
        let d=0;
        for(let j=1;j<temp.length;j++){
            if(j==1){
                d=temp[j]-temp[j-1];
            }else if(d!==(temp[j]-temp[j-1])){
                res.push(false)
                break
            }
            if(j+1===temp.length){
                res.push(true)
            }
        }

    }
    return res;
};

console.log(checkArithmeticSubarrays([4,6,5,9,3,7],[0,0,2],[2,3,5]));