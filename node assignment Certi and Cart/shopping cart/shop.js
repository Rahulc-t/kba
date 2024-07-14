let cart = new Map()
function addItem() {
    console.log("test");
    let item = document.getElementById("itemList").value
    let quantity = Number(document.getElementById("quantity").value)
    if (quantity >0 && !isNaN(quantity)) {
        if (cart.has(item)) {
            let q = cart.get(item)
            cart.set(item, q + quantity)
        }
        else {
            cart.set(item, quantity)
        }
        showCart()
    }
    else{
        alert("enter valid quantity")
    }
}
let tr;
function showCart() {
    console.log("test");
    // if(tr&&tr.parentNode){
    //     tr.parentNode.removeChild(tr);
    // }
    document.getElementById("carter").innerHTML=''
    for(const[item,quantity] of cart){
tr = document.createElement("tr")
let td1 = document.createElement("td")
td1.innerHTML = item
let td2 = document.createElement("td")
td2.innerHTML = quantity
let td3 = document.createElement("td")
switch (item) {
    case "Football":
        td3.innerHTML = 3500 * quantity
        break;
    case "Bat":
        td3.innerHTML = 7300 * quantity
        break;
    case "PS5":
        td3.innerHTML = 69000 * quantity
        break;
    case "Mobile Phone":
        td3.innerHTML = 29000 * quantity
        break;
    case "Shirt":
        td3.innerHTML = 1200 * quantity
        break;
}
let td4=document.createElement("td")
//td4.innerHTML = `<button onclick="removeItem('${item}')">Remove</button>`
let rem=document.createElement("button")
rem.innerHTML="Remove"
rem.onclick=()=>{
    cart.delete(item)
    showCart()
}
td4.appendChild(rem)
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
document.getElementById("carter").appendChild(tr)
    }
}