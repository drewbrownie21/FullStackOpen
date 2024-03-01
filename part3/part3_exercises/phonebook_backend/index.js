const express = require('express')
let morgan = require('morgan')

const app = express()

app.use(express.json())

// Only set a body if the method was a POST request
morgan.token('req-body', (req, res) => {
    return req.method === "POST" ? JSON.stringify(req.body) : ""
})

// Logger using morgan - tiny 
app.use(
    morgan(':method :url :status :response-time ms - :res[content-length] :req-body')
  )

let phonebook = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const generate_id = () => {
    return Math.floor(Math.random() * 5000)
}

const phonebook_length = () => {
    const phonebookLength = phonebook.length > 0
    ? Math.max(...phonebook.map(n => n.id))
    : 0

    return phonebookLength
}

app.get('/', (request, response) => {
    response.send('<h1>Phonebook backend</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = phonebook.find(note => note.id === id)

    if(note){
        response.json(note)
    }else{
        response.send(`<h1>ID ${id} not found in the phonebook.</h1>`)
        response.status(400).end()
    }
})

app.get('/api/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${phonebook_length()} people.</p></br><p>${Date()}</p>`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phonebook = phonebook.filter(person => person.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name){
        response.json('Name is required')
        return  response.status(400).end()
    }

    if(!body.number){
        response.json('Number is required')
        return  response.status(400).end()
    }

    if(phonebook.some(person => person.name.toLowerCase() === body.name.toLowerCase())){
        response.json(`${body.name} is already in the phonebook.`)
        return  response.status(400).end()
    }

    const person = {
        id : generate_id(),
        name : body.name,
        number : body.number
    }

    phonebook = phonebook.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
