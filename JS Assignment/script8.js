
function percentage_print(){
    let sub=document.getElementById("subject").value
    let mark=document.getElementById("marks")
    let grade,prints
    marks=Number(mark.value)
    if(sub!==null&&!isNaN(marks)&&marks>=0){
        if(marks>90){
            grade="A+"
        }
        else if(marks>80&&marks<=90){
            grade="A"
        }
        else if(marks>70&&marks<=80){
            grade="B+"
        }
        else if(marks>60&&marks<=70){
            grade="C"
        }
        else if(marks>50&&marks<=60){
            grade="C+"
        }
        else{
            grade="F"
        }
        if(prints&&prints.parentNode){
            prints.parentNode.removeChild(prints)
        }
        prints=document.createElement("div")
        prints.textContent=`${sub}:${grade}`
        document.body.appendChild(prints)
        document.getElementById('subject').value=""
        mark.value=""
        
    }
}