let fruitlist=[];
//let rollno=[];
let i=0
function fruitentry(){
    let names=document.getElementById("fruit")
    if(names.value!==""){
        fruitlist.push(names.value)
        //rollno.push(i)
        names.value=''
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
    result.textContent=`Fruit at ${rollno} is ${fruitlist[rollno]}`
    document.body.appendChild(result)
}

