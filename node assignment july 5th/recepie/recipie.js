let recipe = new Map() 
recipe.set('Chicken Curry', ['chicken', 'onion', 'ginger', 'chilli', 'pepper', 'potato']) 
recipe.set(' Strawberry Cake', ['strawberry', 'sugar', 'vanilla', 'flour', 'milk', 'butter']) 
recipe.set('Tea', ['tea leaves', 'sugar', 'milk', 'cardomon']) 
recipe.set('Pizza', ['flour', 'olives', 'yeast', 'bellpepper', 'chicken']) 
recipe.set('Mutton Fry', ['mutton', 'onion', 'tomato', 'butter', 'chilli']) 
recipe.set('Pasta', ['pasta', 'tomato', 'onion', 'bellpepper']) 
recipe.set('Pani Puri', ['puri', 'potato', 'chilli', 'onion']) 
let favorite = new Map() 
function find() { 
    document.getElementById("result").innerHTML = '' 
    let ing = document.getElementById('searchButton').value.trim() 
    let flag = false 
    console.log(ing) 
    for (const [i, item] of recipe) {
        for (let j = 0; j < item.length; j++) {
        
            if (item[j].toLowerCase().includes(ing.toLowerCase())) {
                
                flag = true
                let li = document.createElement('li')
                li.innerHTML = `${i}<br>${item}k`
                let fav = document.createElement("button")
                fav.textContent = "ADD TO FAVORITES"
                fav.onclick = function () {
                    if (i in localStorage) { 
                        alert("already in favorites")
                    }
                    else{
                    let temp = recipe.get(i)
                    localStorage.setItem(i, temp)
                    console.log(localStorage.getItem(i));
                    favorite.set(i, item)
                    console.log("test")
                    dispfav()
                    }
                    
                    
    
    
                }
                li.appendChild(fav)
                    document.getElementById('result').appendChild(li)
                    dispfav()
            }
    
            
        }
    }
    
    if (flag == false) {
        document.getElementById("result").innerHTML = `NO RECIPES FOUND!!!`
    }
}
function dispfav() {
    if (localStorage.length > 0) {
      document.getElementById("favor").innerHTML = '';
      for (let i=0;i<localStorage.length;i++) {
        let id=localStorage.key(i)
        let item=localStorage.getItem(id)
        let li = document.createElement('li');
        li.innerHTML = `${id}<br>${JSON.stringify(item)}`; 
        let rem = document.createElement("button");
        rem.textContent = "REMOVE FROM FAVORITES";
        rem.onclick = function () {
          localStorage.removeItem(id);
          favorite.delete(id);
          document.getElementById("favor").removeChild(li);
        }
        li.appendChild(rem);
        document.getElementById("favor").appendChild(li);
      }
    } else {
      console.log("nothing in fav");
    }
  }
  dispfav()