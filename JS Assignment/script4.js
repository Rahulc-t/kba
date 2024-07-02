let namelist=[];
//let rollno=[];
let i=1
function nameentry(){
    let names=document.getElementById("name")
    if(names.value!==""){
        namelist.push(names.value)
        //rollno.push(i)
        names.value=''
        let op=document.createElement("option")
        op.textContent=i
        document.getElementById("roll").appendChild(op)
        i++;
    }
    else{
        window.alert("enter valid name")
    }
    console.log(namelist)
    // console.log(rollno)

}
function namedisplay(){
    const rollno=Number(document.getElementById("roll").value)
    console.log(rollno);
    window.alert(namelist[rollno-1])
}

