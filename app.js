

const yargs = require('yargs')
const notes = require('./notes')

/*
const fs = require('fs')
const read = fs.readFileSync("text.json")
const data = read.toString()
const result = JSON.parse(data)
result.forEach((item)=>{
    console.log(item.name)
})
console.log(result)
//console.log(chalk.bgWhite(data))

yargs.command({
    command: "remove",
    describe: "This is add node",
    handler: function(argv){
        console.log("this is my new add", argv)
    }
})
console.log(yargs.argv)


const msg = getNotes()
console.log(msg)

console.log(chalk.red.bgBlue.bold ("fail"))
console.log(process.argv[2])

const command = process.argv[2]

if(command==='add'){
    console.log("Adding note?")
    console.log(process.argv[3])
}else if(command ==='remove'){
    console.log("removeing note")
}
*/

//Customize yeargs version

//create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function(argv){
         notes.addNote(argv.title, argv.body)
    }
})

//add, remove, read, list
yargs.command({
    command: "remove",
    describe: "Remove a your notes",
    buider: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: "list",
    describe: "list your note",
    handler: function(argv){
        notes.listNote()
    }
})


yargs.argv


