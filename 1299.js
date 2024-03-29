// var replaceElements = function(arr) {
//     for(let i=0;i<arr.length-1;i++){
//         let max=-Infinity;
//         for(let j=i+1;j<arr.length;j++){
//             if(max<arr[j]){
//                 max=arr[j]
//             }
//         }
//         arr[i]=max;
//     }
//     arr[arr.length-1]=-1
//     return arr
// };
var replaceElements = function(arr) {
  let max=arr[arr.length-1];
   arr[arr.length-1]=-1;
   for(let i=arr.length-2;i>=0;i--){
    let curent=arr[i];
    arr[i]=max;                       
    if(curent>max) max=curent
   }
   return arr  
};
console.log(replaceElements([17,18,5,4,6,1]));