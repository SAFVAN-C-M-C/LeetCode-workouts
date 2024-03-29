class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
var reorderList = function(head) {
    const stack=[];
    let current=head;
    while(current){
        stack.push(current);
        current=current.next
    }
    const newStack=[...stack]

    head=stack[0];
    while()




    return 

};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(reorderList(head));