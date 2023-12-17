document.write("8.to find the most frequent item in an array."+"<br>");
function test8(arr){
    let x=[];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]=="a"){
            x.push(arr[i]);
        }
    }
    return x[0]+"("+x.length +"times)";
}
document.write(test8([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])+"<br><br>");