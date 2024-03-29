var mergeInBetween = function(list1, a, b, list2) {
  let i=0;
  let start=null;
  let end=null
  let curent=list1
  while(i<=b){
    if(i==a-1){
        start=curent
    }else if(i===b){
        end=curent.next
    }
    i++
    curent=curent.next
  }
  start.next=list2
  curent=start.next;
  while(curent.next){
    curent=curent.next
  }
  curent.next=end
  return list1
};