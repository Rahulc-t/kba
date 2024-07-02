let namelist=[]
let marklist=[]
function submit(){
    let a=document.getElementById("name")
    let b=document.getElementById("marks")
    if(a.value!==null&&isNaN(a.value)&&!isNaN(b.value)&&b.value>=0){
        namelist.push(a.value)
        marklist.push(Number(b.value))
    }
    else{
        alert("enter valid input")
    }
    a.value=""
    b.value=""
}
let result
function search(){
    if(result&&result.parentNode){
        result.parentNode.removeChild(result)
    }
    result=document.createElement("div")
    let found
    let item=document.getElementById("nameser").value
    if(namelist.includes(item)){
        found=namelist.indexOf(item)
        result.innerHTML=`name:${namelist[found]}<br>Mark:${marklist[found]}`
        document.getElementById("1").appendChild(result)
    }
    else{
        result.innerHTML="STUDENT NOT FOUND"
        document.getElementById("1").appendChild(result)
    }
    document.getElementById("nameser").value=''
    
}
let result2
function average(){
    let sum=0,avg,i
    for(i=0;i<marklist.length;i++){
        sum=sum+marklist[i]
    }
    avg=sum/marklist.length
    if(result2&&result2.parentNode){
        result2.parentNode.removeChild(result2)
    }
    result2=document.createElement("div")
    result2.textContent=`class average:${avg.toFixed(2)}`
    document.getElementById("2").appendChild(result2)
}