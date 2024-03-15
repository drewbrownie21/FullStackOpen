require('dotenv').config()
const Note = require('./models/notes')
const express = require('express')
const cors = require('cors')
let morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.static('dist')) // This makes express show static content
// Logger using morgan - tiny 
app.use(morgan('tiny'))

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
        console.log(notes)
    })
})

app.get('/api/notes/:id', (request, response) => {
    Note.findById(request.params.id).then(note => {
      response.json(note)
    })
})

app.post('/api/notes', (request, response) => {
    const body = request.body

    if(body.content === undefined){
        return response.status(400)
            .json({error : "content missing"})
    }

    const note = new Note({
        content : body.content,
        important : Boolean(body.important) || false
    })

    note.save().then(savedNote => {
        response.json(savedNote)
    })
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
