let result
function rev(){
    let a=Number(document.getElementById("num").value)
    
    if(!isNaN(a)){
        a=a.toString().split('').reverse().join('')
        if(result&&result.parentNode){
            result.parentNode.removeChild(result)
        }
        result=document.createElement("div")
        result.textContent=`REVERSE IS ${a}`
        document.body.appendChild(result)

    }
    else{
        alert("enter valid input")
    }
    document.getElementById("num").value=''
}