function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {

    let current=head;
    while(current!=null && current.next!=null){
        if(current.val==current.next.val){
            current.next=current.next.next
        }else{
            current=current.next
        }
    }
    return head
};
let head=new ListNode(1)
head.next=new ListNode(1)
head.next.next=new ListNode(2);
console.log(deleteDuplicates(head));