const arr=[4,5,6,7,8];
const val=7;
function binarysearch(arr,val){
    var start=0;
    var end=arr.length-1;
    while(start<=end){
        var mid=Math.floor((start+end)/2);
    
    if(arr[mid]===val){
        return mid;
    }else if(arr[mid]<val){
        start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

let position = binarysearch(arr,val);
if (position !== -1) {
  console.log(`Found target value ${val} at position ${position}.`);
} else {
  console.log(`Target value ${val} not found in array.`);
}