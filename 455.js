var findContentChildren = function(g, s) {
    if(s.length==0 || g.length==0)return 0
    let count=0;
    let i=0;
    let j=0;
    g.sort((a,b)=>b-a);
    s.sort((a,b)=>b-a)
    while(j<s.length && i<g.length){
        if(g[i]<=s[j]){
            count++;
            i++;
            j++;
        }else if(g[i]>s[j]){
            i++;
        }
    }
    return count;
};
console.log(findContentChildren([1,2,3],[1,1]));