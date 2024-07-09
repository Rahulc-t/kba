const { log } = require('console')
let readline=require('readline')
let rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let event=new Map()
function menu(){
    console.log("1.Register for new event,2.summary,3.cancel registration,4.update details,5.Sort Details,6.exit")
    rl.question("enter option",function(command){
        switch(command){
            case '1':
                newevent()
                break;
            case '2':
                summary()
                menu()
                break;
            case '3':
                rl.question("enter id to cancel:",function(id){
                    cancel(id)
                    menu()
                })
                break;
            case '4':
                rl.question("enter id to update:",function(id){
                update(id)
                })
                break;
            case '5':
                typesum()
                menu()
                break;
            case '6':
                rl.close()
                break;
        }
    })
}
function reg(id,name,type,date){
    if(event.has(id)||id===''){
        console.log("invalid entry")
    }
    else{
        event.set(id,{name,type,date})
        console.log("entry made");
    }
}
function newevent(){
    rl.question("enter registration  id:",function(id){
        rl.question("enter name:",function(name){
            console.log('three types available: dancing,web3,and painting');
            rl.question("enter type:",function(type){
                rl.question("enter in date:",function(date){
                        reg(id,name,type,date)
                        menu()
                })
            })
        })
    })
}
function summary(){
    if(event.size>0){
        for(const[i,item] of event){
            console.log(`id:${i},Participant name:${item.name},Event name:${item.type}, date:${item.date}`)
        }

    }
    else{
        console.log("list empty");
    }
}
function cancel(id){
    if(event.has(id)){
        event.delete(id)
        console.log('deleted');
    }
    else{
        console.log("not found");
    }
}
function update(id){
    if(event.has(id)){
        const temp=event.get(id)
        rl.question("enter new name:",function(newname){
            rl.question("enter new event name: ",function(newtype){
                rl.question("enter new date:",function(newin){
                        temp.name=newname||temp.name;
                        temp.type=newtype||temp.type
                        temp.date=newin||temp.date
                        menu()
                })
            })            
        })
    }
    else{
        console.log("not possible");
        menu()
    }

}
function typesum(){
    let d=[],b=[],p=[]
    for(const[i,item] of event){
        if(item.type==='dancing'){
            d.push({i,...item})
        }
        else if(item.type==='web3'){
            b.push({i,...item})
        }
        else{
            p.push({i,...item})
        }

    }
    console.log('dancing')
    console.log(d);
    console.log(`total participants=${d.length}`);
    console.log('web3')
    console.log(b);
    console.log(`total participants=${b.length}`);
    console.log('painting')
    console.log(p);
    console.log(`total participants=${p.length}`);
    
}
menu()