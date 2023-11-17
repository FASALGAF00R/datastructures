// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
//       if (minIndex !== i) {
//         // Swap arr[i] and arr[minIndex]
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
//     return arr;
//   }
//   const arr=[9,8,7,6,5];
// //   console.log(selectionSort(arr));


const arr=[5,-4,3,0,1];
function selectsort(arr){
  for(var i=0;i<arr.length;i++){
    let minindex=i;
    for(var j=i+1;j<arr.length;j++){
      if(arr[j]< arr[minindex]){
        minindex=j;
      }
    }
    if(minindex!=i){
      let temp=arr[i];
     arr[i]=arr[minindex];
     arr[minindex]=temp;
    }
  }
  return arr
}
console.log(selectsort(arr));
// const a=[9,8,7,6,5,3];
// const n=a.length-1;
// function selectionSort(a) {
//   for(var i=0;i<n;i++){
//     let minindex=i;
//     for(j=i+1;j<n;j++){
//       if(a[j]<a[minindex]){

//       }
//   }
// }
// }
