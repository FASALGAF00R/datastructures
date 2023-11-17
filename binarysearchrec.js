
//  function binarysearch(arr,val){
// var low=0;
// var high=arr.length-1;
// while(low<=high){
//     let mid=Math.floor((low+high)/2);
// if(arr[mid]==val){
//     return mid;
// }
// else if(arr[mid]<val){
//     low=mid+1;
// }else{
//     high=mid-1;
// }
// }
// return -1;
//  }
//  const arr=[2,3,4,5,6];
// var val=2;
// let index=binarysearch(arr,val);
// console.log(index);
const arr=[1,2,3,4,5];
var val=3;
function binarysearch(arr,val){
   let low=0;
  let high=arr.length-1;
  while(low<high){
    let mid=Math.floor((low+high)/2);
  if(arr[mid]==val){
    return mid;
  }else if(a[mid]<val){
    low=mid+1;
  }else{
    high=mid-1;
  }
}
  return -1;
}
let index=binarysearch(arr,val);
console.log(index);