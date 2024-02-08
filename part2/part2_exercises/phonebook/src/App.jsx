import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const peopleToShow = newSearch.length > 0
    ? persons.filter(person => person.name.includes(newSearch))
    : persons

  const addPerson = (event) => {
      event.preventDefault()

      const personObject = {
        name   : newName,
        number : newNumber
      }

      if(persons.map(a=>a.name).includes(newName)){
        alert(`${newName} is already in the phonebook!`)
      }else{
          axios
          .post('http://localhost:3001/persons', personObject)
          .then(response => {
              setPersons(persons.concat(response.data))
              setNewName("")
              setNewNumber("")
          })      
      }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter newSearch={newSearch} handleSearch={handleSearch}/>

      <h3>add a new</h3>

      <PersonsForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>

      <Persons peopleToShow={peopleToShow}/>
    </div>
  )
}

export default App