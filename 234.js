var isPalindrome = function(head) {
    const stack=[]
    let curent =head
    while(curent.next){
        stack.push(curent.val)
        curent=curent.next
    }
    return stack.join("")===stack.reverse().join("")
    
};