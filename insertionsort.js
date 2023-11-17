// const arr=[5,4,3,2,1]
// const n=arr.length
// function insert(arr){
//     for( var i=1;i<n;i++){
//     let j=i-1;
//     let temp =arr[i];
//         while(j>=0&&arr[j]>temp){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=temp;
//     }
// return arr;
// }
// console.log( insert(arr));
// const name=[4,7,3,2,8 ];





// const n=a.length;
// function insert(a){
//     for(var i=1;i<n;i++){
//     let j=i-1;
//     let temp=a[i];
//         while(j>=0&&a[j]>temp){
//             a[j+1]=a[j];
//             j--;
//         }
// a[j+1]=temp;
//     }
//     return a;
// }
// console.log(insert(a));


const a=[4,3,6,1,7];
const n=a.length;
function insert(a) {
for(var i=1;i<n;i++){
  let  j=i-1;
    let temp=a[i];
    while(j>=0&&a[j]>temp){
        a[j+1]=a[j];
        j--;
    }
    a[j+1]=temp;
}
return a
}
console.log(insert(a));

