let darelist=[];
//let rollno=[];
let i=0
function dareentry(){
    let dares=document.getElementById("fruit")
    if(dares.value!==""){
        darelist.push(dares.value)
        //rollno.push(i)
        dares.value=''
        let op=document.createElement("option")
        op.textContent=i
        document.getElementById("index").appendChild(op)
        i++;
    }
    else{
        window.alert("enter valid name")
    }
    //console.log(namelist)
    // console.log(rollno)

}
let result
function fruitdisplay(){
    const rollno=Number(document.getElementById("index").value)
    if(result&&result.parentNode){
        result.parentNode.removeChild(result)
    }
    result=document.createElement("div")
    result.textContent=`YUOR DARE IS: ${darelist[rollno]}`
    document.body.appendChild(result)
}

