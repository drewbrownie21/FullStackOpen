const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const person = process.argv[3]
const phoneNumber = process.argv[4]

const url =
    `mongodb+srv://drewtjbrown:${password}@cluster0.3yock73.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const phoneSchema = new mongoose.Schema({
    id : Number,
    name: String,
    number : String,
})

const Phonebook = mongoose.model('Phonebook', phoneSchema)

const phonebook = new Phonebook({
    name: person,
    number: phoneNumber
})

// If there is a name and number, it will be placed in the phonebook db
// If either is missing, the phonebook db will be displayed
if(process.argv[3] && process.argv[4]){
    phonebook.save().then(result => {
        console.log(`Added ${person} ${phoneNumber} to the Phonebook!`)
        mongoose.connection.close()
    })
}else{
    Phonebook.find({}).then(result => {
        result.forEach(phonebookEntry => {
        console.log(phonebookEntry)
        })
        mongoose.connection.close()
    })
}
