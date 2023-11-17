var ar=[6]; o(1)
var ar=[2,5,4,6,7,3];
for(var i=0;i<ar.length;i++){
for(var j=i+1;j<ar.length;j++){
    if (ar[i]+ar[j]==10){
        console.log(ar[i],ar[j]);
    }
}
}