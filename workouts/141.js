//linear spacce
// var hasCycle = function(head) {
//     const seen=new Set()
//     let curr=head
//     while(curr){
//         if(seen.has(curr)){
//             return true
//         }else{
//             seen.add(curr)
//             curr=curr.next
//         }
//     }
//     return false
// };
//const space
var hasCycle = function(head) {
  let fast=head
  let slow =head
  while(fast && fast.next){
    slow=slow.next
    fast=fast.next.next
    if(fast===slow){
        return true
    }
  }  
  return false
};