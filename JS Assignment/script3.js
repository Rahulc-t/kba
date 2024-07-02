let result
function compare(){
    
    let a=Number(document.getElementById("num1").value)
    let b=Number(document.getElementById("num2").value)
   
    if(result&&result.parentNode){
        document.body.removeChild(result)
    }
    result=document.createElement("div")
    document.body.appendChild(result)
    console.log("test")
    if(!isNaN(a)&&!isNaN(b)){
        console.log(a)
        console.log(b)
        
        if(a>b){
            
            result.textContent= `${a} is Greater than ${b}`
        }
        else if(a==b){
            result.textContent= `${a} is Equal to ${b}`
        }
        else{
            result.textContent= `${b} is Greater than ${a}`
        }
        
    }
    else{
        window.alert("Enter valid Numbers")
    }
    document.getElementById("num1").value=""
    document.getElementById("num2").value=""
}