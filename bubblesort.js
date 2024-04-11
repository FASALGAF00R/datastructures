const arr=[5,2,3,2,8,1]
const n=arr.length
function bubblesort(arr){
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

let a=bubblesort(arr)
console.log(a);