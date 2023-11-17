function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      swap(arr, i, largest);
      heapify(arr, n, largest);
    }
  }
  
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  function heapSort(arr) {
    const n = arr.length;
  
 
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
 
    for (let i = n - 1; i > 0; i--) {
      swap(arr, 0, i);
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  const arr = [9, 0, -2, 8, 3];
  const sortedArr = heapSort(arr);
  console.log(sortedArr);