function jumpSearch(arr, x) {
    const n = arr.length;
    const blockSize = Math.floor(Math.sqrt(n));
    let start = 0;
    let end = blockSize;

    while (end < n && arr[end] < x) {
        start = end;
        end += blockSize;
    }

    for (let i = start; i < end; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}
var arr=[1,5,4,3,6];
const x=5;
console.log(jumpSearch(arr,x));
