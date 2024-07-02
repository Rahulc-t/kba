let inString
let str
let result
let disp;
console.log(inString.value)
function rev(){
    inString=document.getElementById("inputString");
    str=inString.value
    if(str!==''){
        
        result=str.split('').reverse().join('')
        display(result)
    }
    else{
        alert("invalid entry")
    }
    inString.value=''
}
function upp(){
    inString=document.getElementById("inputString");
    str=inString.value
    if(str!==''){
        result=str.toUpperCase()
        display(result)
    }
    else{
        alert("invalid entry")
    }
    inString.value=''
}
function low(){
    inString=document.getElementById("inputString");
    str=inString.value
    if(str!==''){
        result=str.toLowerCase()
        display(result)
    }
    else{
        alert("invalid entry")
    }
    inString.value=''
}

function display(result){
    if(disp&&disp.parentNode){
        disp.parentNode.removeChild(disp)
    }
    disp=document.createElement("div")
    disp.textContent=`THE RESULT= ${result}`
    document.body.appendChild(disp)
}