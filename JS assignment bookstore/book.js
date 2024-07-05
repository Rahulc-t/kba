const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let book= new Map()
function askCommand() {
    console.log(`Welcome to the BOOKSTORE Management `)
    console.log("AVAILABLE COMMANDS: ADD,REMOVE,SEARCH,UPDATE,Summary,EXIT");
    rl.question("\nenter a command: ", function (command) {
        switch (command.trim().toLowerCase()) {
            case 'add':
                addItemPrompt();
                break;
            case 'remove':
                removeItemPrompt();
                break;
            case 'search':
                searchItemsPrompt();
                break;
            case 'update':
                updateItemPrompt();
                break;
            case 'summary':
                printsummary();
                askCommand();
                break;
            case 'exit':
                rl.close()
                break;
            default:
                console.log("invalid commad");
                askCommand()
                break;

        }

    })
}
function addItemPrompt() {
    rl.question("ENTER ID:", function (id) {
        rl.question("ENTER BOOK TITLE:", function (title) {
            rl.question("ENTER AUTHOR:", function (author) {
                    addbook(id, title, author)
                    askCommand();
            })
        })
    })
}
function removeItemPrompt() {
    rl.question("ENTER ENTRY ID TO REMOVE:", function (id) {
        remove(id)
        askCommand();
    })
}
function searchItemsPrompt() {
    rl.question("ENTER THE TERM TO BE SEARCHED:", function (searchItem) {
        search(searchItem)
        askCommand()
    })
}
function updateItemPrompt() {
    rl.question("ENTER ENTRY ID TO UPDATE:", function (id) {
        rl.question("ENTER NEW TITLE:", function (newtitle) {
            rl.question("ENTER THE NEW AUTHOR:", function (newauthor) {
                    update(id,newtitle,newauthor)
                    askCommand()
            })
        })
    })
}

function addbook(id,title,author){
    if(book.has(id)||id==""){
        console.log("INVALID ENTRY: DUPLICATE ENTRY OR EMPTY ENTRY")
    }
    else{
        book.set(id,{title,author})
        console.log(`ENTERY WITH ID: ${id} ADDED`)
    }
}
function remove(id){
    if(!book.has(id)||id===""){
        console.log("INVALID ENTRY: ID NOT NOT!!!")
    }
    else{
        book.delete(id)
        console.log(`ENTRY WITH ID: ${id} DELETED`)
    }
}
function update(id,newtitle,newauthor){
    if(book.has(id)){
        let temp=book.get(id)
        temp.title=newtitle || temp.title
        temp.author=newauthor|| temp.author
        book.set(id,temp)
        console.log(`ENTRY WITH ID: ${id} IS UPDATED`);
    }
    else{
        console.log(`ENTRY WITH ID: ${id} NOT FOUND`);
    }
    
}
function search(searchterm) {
    const result = [];
    for (const [id, item] of book) {
        if (id.includes(searchterm) || item.title.includes(searchterm) || item.author.includes(searchterm)) {
            result.push({ id, ...item })
        }
    }
    if (result.length > 0) {
        console.log('SEARCH RESULTS:', result)
    }
    else {
        console.log("NO ITEMS FOUND!!!")
    }
}
function printsummary() {
    if (book.size > 0) {
        console.log(`BOOKSTORE SUMMARY:`)
        for (const [id, item] of book) {
            console.log(`ID: ${id}, TITLE:${item.title}, AUTHOR: ${item.author}`)
        }

    }
    else {
        console.log(`BOOKSTORE EMPTY`);
    }
}
askCommand()