var detectCycle = function(head) {
    const visited=new Map();

    let current=head;
    while(current){
        if(visited.has(current)){
            return current
        }
        visited.set(current,true);
        current=current.next;
    }
    return null
};