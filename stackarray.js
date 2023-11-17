const array=[1,2,3,4,5];
class stack{
    constructor(){
        this.array=[];
    }
    push(data){
        this.array.push(data);
    }
pop(){
    if(this.array.length==0){
        return null;
    }
    return this.array.pop();
}
isEmpty(){
    return  this.array.length===0
}
   function recursiveArray(array) {
    if (array.isEmpty()) {
      return;
    }
    const value = array.pop();
    console.log(value); // Log the popped value to the console
    recursiveArray(array);
  }
    display();{
        console.log(this.array);
    }
}
const mystack= new stack();
mystack.push(5);
mystack.push(6);
mystack.push(8);
// mystack.pop();
// console.log(mystack.isEmpty());
recursiveArray(array);
// mystack.display();



// function recursiveStack(stack) {
//     if (stack.isEmpty()) {
//       return;
//     }
//     const value = stack.pop();
//     console.log(value); // Log the popped value to the console
//     recursiveStack(stack);
//   }




// const topelemnt=array.pop();
// console.log(topelemnt);
// console.log(array);


// const stack=[];
// stack.push(4,2,2);
// console.log(stack);