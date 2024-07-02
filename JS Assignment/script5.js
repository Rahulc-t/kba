let result
function areasq(){
    let a=Number(document.getElementById("side").value)
    if(a!==0&&!isNaN(a)){
    if(result&&result.parentNode){
        result.parentNode.removeChild(result)
    }
    result=document.createElement("div")
    let area=a*a
    result.textContent=`Area of Square = ${area.toFixed(2)}`
    document.getElementById("square").appendChild(result)
    document.getElementById("side").value=""

}
else{
    alert("invalid entry")
}
}
let result1
function arearec(){
    let a=Number(document.getElementById("sidea").value)
    let b=Number(document.getElementById("sideb").value)
    if(a!==0&&b!==0&&!isNaN(a)&&!isNaN(b)){
        if(result1&&result1.parentNode){
            result1.parentNode.removeChild(result1)
        }
        result1=document.createElement("div")
        let area=a*b
        result1.textContent=`Area of Rectangle=${area.toFixed(2)}`
        document.getElementById("rectangle").appendChild(result1)
        document.getElementById("sidea").value=''
        document.getElementById("sideb").value=""
    }
    else{
        alert("invalid entry")
    }
}
let result2
function areacir(){
    let a=Number(document.getElementById("rad").value)
    if(a!==0&&!isNaN(a)){
    if(result2&&result2.parentNode){
        result2.parentNode.removeChild(result2)
    }
    result2=document.createElement("div")
    let area=a*3.14*a
    result2.textContent=`Area of Circle = ${area.toFixed(2)}`
    document.getElementById("circle").appendChild(result2)
    document.getElementById("rad").value=""

}
else{
    alert("invalid entry")
}
}