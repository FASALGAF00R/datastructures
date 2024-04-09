// const arr=[7,4,9,2,8,6,1]
// function quicksort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     } else {
//       const pivotindex = Math.floor(Math.random()*arr.length);
//       const pivot=arr[pivotindex];
//       const left=[];
//       const right=[];
//       for (let i = 0; i < arr.length; i++) {
//         if (i ===pivotindex) {
//             continue;
//           }
//         if (arr[i] <= pivot) {
//           left.push(arr[i]);
//         } else{
//           right.push(arr[i]);
//         }
//       }
//       return quicksort(left).concat(pivot, quicksort(right));
//     }
//   }
//   console.log(quicksort(arr));

// const arr=[7,4,3,2,1,0]
// function quicksort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }else{
// let pivot=arr[arr.length-1];
// let right=[];
// let left=[];
// for( let i=0;i<arr.length-1;i++){
//   if(arr[i]<pivot){
//     left.push(arr[i]);
//   }else{
//     right.push(arr[i]);
//   }
// }
// return [...quicksort(left),pivot,...quicksort(right)];
//   }
// }
//   console.log(quicksort(arr));

// const a = [7, 4, 5, 9, 10];
// function quick(a) {
//   if (a.length <= 1) {
//     return a;
//   } else {
//     const pivot = a[a.length - 1];
//     const left = [];
//     const right = [];
//     for (i = 0; i < a.length - 1; i++) {
//       if (a[i] < pivot) {
//         left.push(a[i]);
//       } else {
//         right.push(a[i]);
//       }
//     }

//     return [...quick(left), pivot, ...quick(right)];
//   }
// }
// console.log(quick(a));


const a = [4, 5, 3, 2, 8, 5]

function quick(a) {
  if (a.length <= 1) {
    return a
  } else {
    let left = []
    let right = []
    let pivot = a[a.length - 1]
    for (let i = 0; i < a.length-1; i++) {
      if (a[i] < pivot) {
        left.push(a[i])
      } else {
        right.push(a[i])
      }
    }
    return [...quick(left), pivot, ...quick(right)]

  }

}


let ac = quick(a)
console.log(ac);
