let arr=[]
let result
function largest(){
    let a=document.getElementById("element")
    let val=Number(a.value)
    if(!isNaN(val)){
        arr.push(val);

    }
    else{
        alert("enter valid input")
    }
    let large=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i]
        }
    }
    if(result&&result.parentNode){
        result.parentNode.removeChild(result)
    }
    result=document.createElement("div")
    result.textContent=`LARGEST NUMBER IS ${large}`
    document.body.appendChild(result)
    a.value=''

}