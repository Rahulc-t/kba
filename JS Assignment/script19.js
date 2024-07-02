let result
function evenodd(){
    let f;
    let a=Number(document.getElementById("num").value)
    if(!isNaN(a)&&a>0){
        (a%2==0)?f="EVEN":f="ODD"
        if(result&&result.parentNode){
            result.parentNode.removeChild(result)
        }
        result=document.createElement("div")
        result.textContent=`the number is ${f}`
        document.body.appendChild(result)
    }
    else{
        alert("invalid inputs")
    }
    document.getElementById("num").value=''
}