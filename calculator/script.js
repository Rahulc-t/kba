let formula=''
let first=''
let second=''
let flag=0
let final
check=0
function readnum(num){
    formula+=num
    let temp=Number(formula)
    console.log(temp)
    if(!isNaN(temp)&&check!=1){
        first=temp
    
    }
    else{
        second+=num
        
    }

    document.getElementById("display").textContent=`${formula}`
    console.log(first)
    //console.log(second)
}
function operation(value){
    switch(value){
        case 1:
            formula=formula+"+"
            flag=1
            break;
        case 2:
            formula=formula+"-"
            flag=2
            break;
        case 3:
            formula=formula+"*"
            flag=3
            break;
        case 4:
            formula=formula+"/"
            flag=4
            break;
    }
    document.getElementById("display").textContent=`${formula}`
    console.log(flag)
    

}
function result(){
    console.log(flag)
    if(first!==null&&second!==null&&flag>0&&flag<5){
        let a=Number(first),b=Number(second)
        // console.log(a)
        // console.log(b)
    switch(flag){
        case 1:
            final=a+b
            break;
        case 2:
            final=a-b
            break;
        case 3:
            final=a*b
            
            break;
        case 4:
            final=a/b
            break;
        
    }
    document.getElementById("display").textContent=`${final}`
    first=final
    first=JSON.stringify(first)
    second=''
    check=1
    formula=final
    formula=JSON.stringify(formula)
    // console.log(final)
     //console.log(first)

    // console.log(second)
    // console.log(flag)
}
}
function clear1(){
    
    formula=''
    first=''
    second=''
    flag=0
    check=0
    document.getElementById("display").textContent=`${formula}`
    console.log(formula)
    console.log(first)
    console.log(second)
    console.log(flag)
   
}