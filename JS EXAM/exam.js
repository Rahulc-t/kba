let itemlist = []
let typelist = []
function additem() {
    let item = document.getElementById("itemName")
    let cat = document.getElementById("category")
    let list = document.getElementById("shoplist")
    let iname = item.value.trim()
    let icat = Number(cat.value)
    if (iname !== "" && !isNaN(icat) && icat >= 1 && icat <= 3&&isNaN(iname)) {
        itemlist.push(iname)
        typelist.push(icat)
        let li = document.createElement("li")
        switch (icat) {
            case 1:
                li.textContent = iname + "(groceries)"
                li.classList.add("gro")
                break;
            case 2:
                li.textContent = iname + "(electronics)"
                li.classList.add("ele")
                break;
            case 3:
                li.textContent = iname + "(cloths)"
                li.classList.add("cloth")
                break;
        }
        let buy=document.createElement("button")
        buy.textContent="BOUGHT"
        buy.onclick=function(){
            li.classList.toggle("buy")
        }
        li.appendChild(buy)
        let edit=document.createElement("button")
        edit.textContent="EDIT"
        edit.onclick=function(){
            let newitem=prompt("item name:",iname)
            if(newitem!==""){
                let nameindex=itemlist.indexOf(iname)
                itemlist[nameindex]=newitem
                iname=newitem
                li.classList.remove("gro","ele","cloth")
                switch (icat) {
                    case 1:
                        li.firstChild.textContent = iname + "(groceries)"
                        li.classList.add("gro")
                        break;
                    case 2:
                        li.firstChild.textContent = iname + "(electronics)"
                        li.classList.add("ele")
                        break;
                    case 3:
                        li.firstChild.textContent = iname + "(cloths)"
                        li.classList.add("cloth")
                        break;
                }
            }
            //==============
            let newcat=prompt("category:",icat)
            newcat=Number(newcat)
            if(newcat>=1&&newcat<=3&&!isNaN(newcat)){
                let catindex=typelist.indexOf(icat)
                typelist[catindex]=newcat
                icat=newcat
                li.classList.remove("gro","ele","cloth")
                switch (icat) {
                    case 1:
                        li.firstChild.textContent = iname + "(groceries)"
                        li.classList.add("gro")
                        break;
                    case 2:
                        li.firstChild.textContent = iname + "(electronics)"
                        li.classList.add("ele")
                        break;
                    case 3:
                        li.firstChild.textContent = iname + "(cloths)"
                        li.classList.add("cloth")
                        break;
                }
            }
        }
        li.appendChild(edit)
        let remove=document.createElement("button")
        remove.textContent="REMOVE"
        remove.onclick=function(){
            list.removeChild(li)
            let itemindex=itemlist.indexOf(iname)
            itemlist.splice(itemindex,1)
            typelist.splice(itemindex,1)
        }
        li.appendChild(remove)
        list.appendChild(li)

    }
    else{
        alert("enter valid inputs")
    }  
    item.value=''
    cat.value=''
}