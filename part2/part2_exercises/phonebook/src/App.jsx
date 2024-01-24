import { useState } from 'react'
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
        setPersons(persons.concat(personObject))
      }
      setNewName("")
      setNewNumber("")
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