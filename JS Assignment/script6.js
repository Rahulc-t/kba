let arr=[];
let i=0;
function additem(){
    let a=document.getElementById("arritem")
    arr.push(a.value)
        let li=document.createElement("li")
        li.textContent=arr[i]
        i++
        disp.appendChild(li)
        a.value=''
    
}
console.log(arr)