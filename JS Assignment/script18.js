let result
function fact(){
    let f=1
    let a=Number(document.getElementById("num").value)
    if(!isNaN(a)&&a>0){
        for(let i=1;i<=a;i++){
            f=f*i
        }
        if(result&&result.parentNode){
            result.parentNode.removeChild(result)
        }
        result=document.createElement("div")
        result.textContent=`FACTORIAL= ${f}`
        document.body.appendChild(result)
    }
    else{
        alert("invalid inputs")
    }
    document.getElementById("num").value=''
}