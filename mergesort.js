function mergesort(a){
    if(a.length <=1){
        return a;
    }
    const mid =Math.floor(a.length/2)
    const left=a.slice(0,mid)
    const right=a.slice(mid)
    return merge(mergesort(left),mergesort(right))
}
 function merge(left,right){
    const sortarr=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
        sortarr.push(left.shift())
    } else {
        sortarr.push(right.shift())
    }
}
const resultarr=[...sortarr,...left,...right]
return resultarr
 }
 const a=[8,2,-5,-1,3]
 console.log(merge(a));

// function mergeSort(a) {
//     if (a.length <= 1) {
//       return a;
//     }
//     const mid = Math.floor(a.length / 2);
//     const left = a.slice(0, mid);
//     const right = a.slice(mid);
//     return merge(mergeSort(left), mergeSort(right));
//   }
  
//   function merge(left, right) {
//     const sortedArr = [];
//     while (left.length && right.length) {
//       if (left[0] <= right[0]) {
//         sortedArr.push(left.shift());
//       } else {
//         sortedArr.push(right.shift());
//       }
//     }
//     return sortedArr.concat(left.slice()).concat(right.slice());
//   }
  
//   const a = [5,6,7,8,9];
//   console.log(mergeSort(a));





