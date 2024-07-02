const arr=[];
let i=0;
function additem(){
    let a=Number(document.getElementById("arritem").value)
    if(a!==null&&!isNaN(a)){
    arr.push(a)
        let li=document.createElement("li")
        li.textContent=arr[i]
        disp.appendChild(li)
        let ops=document.createElement("option")
        ops.textContent=i
        document.getElementById("indexsel").appendChild(ops)
        i++
        sort()
    }
    else{
        alert("enter valid input")
    }
    document.getElementById("arritem").value=''
    //console.log(arr);
}


let result
function inddisp(){
    console.log(arr);
    let a=Number(document.getElementById("indexsel").value)
    if(result&&result.parentNode){
        result.parentNode.removeChild(result)
    }
    result=document.createElement("div")
    result.textContent=`${a}th element is ${arr[a]}`
    document.getElementById("2").appendChild(result)
}
let sortdisp,revdisp
function sort(){
    let i,j,temp,arr1=[],rev=[]
    for(i=arr.length-1,j=0;i>=0;i--,j++){
        rev[j]=arr[i]
    }
    for(i=0;i<arr.length;i++){
        arr1[i]=arr[i]
    }
    for(i=0;i<arr1.length-1;i++){
        for(j=0;j<arr1.length-i-1;j++){
            if(arr1[j]>arr1[j+1]){
                temp=arr1[j]
                arr1[j]=arr1[j+1]
                arr1[j+1]=temp
                
            }
        }
    }
    if(sortdisp&&sortdisp.parentNode){
        sortdisp.parentNode.removeChild(sortdisp)
    }
    sortdisp=document.createElement("div")
    sortdisp.textContent=`sorted array is ${arr1}`
    document.getElementById("1").appendChild(sortdisp)
    if(revdisp&&revdisp.parentNode){
        revdisp.parentNode.removeChild(revdisp)
    }
    revdisp=document.createElement("div")
    revdisp.textContent=`reversed array is ${rev}`
    document.getElementById("1").appendChild(revdisp)
}
let searchdisp
function search(){
    let i
    let item=Number(document.getElementById("search_element").value)
    if(item!==''&&!isNaN(item)){
        console.log(item)
        console.log(arr[0])
        let found=false
        for(i=0;i<arr.length;i++){
            if(arr[i]==item){
                found=true
            }
                if(searchdisp&&searchdisp.parentNode){
                    searchdisp.parentNode.removeChild(searchdisp)
                }
                searchdisp=document.createElement("div")
                searchdisp.textContent=found? `${item} found!!!`:`${item} not found`
                document.getElementById("3").appendChild(searchdisp)
            }
        }
    
    else{
        alert("enter valid input")
    }
    document.getElementById("search_element").value=""
}