// const arr=[5,2,4,3,1];
// var n=arr.length;
// function bubblesort(arr) {
//     for(var i=0;i<n;i++){
//         for (var j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// return arr;
// }
// const result=bubblesort(arr) 

// // console.log(result);
// const arr=[9,6,5,4,3,2,1];
// const n=arr.length;
// function bubble(arr){
//     for(var i=0;i<n;i++){
//         for(var j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// const res=bubble(arr);
// console.log(res);

const a=[3,4,2,1,9];
const n=a.length;
function bubble(a){
    for(var i=0;i<n;i++){
        for(var j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                var temp=a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}
console.log(bubble(a));

