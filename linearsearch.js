const arr=[4,5,6,7,8,9]
const x=10;
function linearSearch(arr,x){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===x){
            return i;
        }
    }
    return -1;
}
const index=linearSearch(arr,x);
console.log(index);

// function linearSearch(array, target) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] == target) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   const array = [5, 10, 15, 20, 25, 30];
//   const target = 25;
//   console.log(linearSearch(array, target));

// function linearSearch(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === val) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   const arr = ['apple', 'banana', 'orange', 'pear', 'grape'];
//   console.log(linearSearch(arr, 'pear')); 
//   console.log(linearSearch(arr, 'watermelon'));





