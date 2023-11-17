const arr=[5,2,4,3,1];;
function bubblesort(arr) {
    for(var i=0;i<arr.length;i++){
        for (var j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
return arr;
}
const result=bubblesort(arr) 

console.log(result);