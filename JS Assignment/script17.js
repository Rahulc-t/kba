let result
function submit(){
    let instr=document.getElementById("str").value
    let count=0
    if(instr!==""){
        for(let i=0;i<instr.length;i++){
            if(instr[i]=='a'||instr[i]=='e'||instr[i]=='i'||instr[i]=='o'||instr[i]=='u'||instr[i]=='A'||instr[i]=='E'||instr[i]=='I'||instr[i]=='O'||instr[i]=='U'){
                count++
            }
        }
        if(result&&result.parentNode){
            result.parentNode.removeChild(result)
        }
        result=document.createElement("div")
        result.textContent=`NO OF VOWELS= ${count}`
        document.body.appendChild(result)
    }
    else{
        alert("invalid input")
    }
    document.getElementById("str").value=''
}