var num=1;
function show(){
    console.log("hello",num);
    if(num<=10343)
    num++;
    show();
}
show()