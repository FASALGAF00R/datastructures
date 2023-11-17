// var n=5;
// function fib(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       return fib(n - 1) + fib(n - 2);
//     }
//   }
//   console.log(fib(0));
// let n=5
function fib(n){
  if(n<=1){
    return 1;
  }else{
    return fib(n-1)+fib(n-2);
  }
}
console.log(fib(1));