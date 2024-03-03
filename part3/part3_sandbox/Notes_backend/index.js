const express = require('express')
const cors = require('cors')
let morgan = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist')) // This makes express show static content
// Logger using morgan - tiny 
app.use(morgan('tiny'))


let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    if(note){
        response.json(note)
    }else{
        response.send('<h1>No id found</h1>')
        response.status(400).end()
    }
})

const generate_id = () => {
    const maxID = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0

    return maxID + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    if(!body.content){
        return response.status(400).json({
            error : "content missing"
        })
    }

    const note = {
        content : body.content,
        important : Boolean(body.important) || false,
        id : generate_id()
    }

    notes = notes.concat(note)

    response.json(note)
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
