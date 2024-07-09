let book =new Map();

function addbook(id,title,author){
    if(book.has(id)){
        console.log("ERROR ID ALREADY PRESENT")
    }
    else{
        book.set(id,{title,author});
    }
}
function remove(id){
    if(book.has(id)){
        book.delete(id)
    }
    else{
        console.log("ERROR NO SUCH BOOK PRESENT")
    }
}
function search(item){
for(let i=0;i<book.size;i++){

}
}
// function search(value){
//     for(let[id,val]of book.entries())
//     if(book.title.includes(value)||book.author.includes(value)||book.id==value){
//         console.log(book.get(id))
//     }
//     else{
//         console.log("NOT PRESENT")
//     }
// }
addbook(1,"jungle book","Rudyard klipling")
addbook(2,"mein kampf","hilter")
addbook(3,"fffffff","tdfvjc")
//search(1)