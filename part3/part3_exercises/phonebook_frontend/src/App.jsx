import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import PersonService from './services/personService'
import Notification from './components/Notifications'
import './index.css'

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
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    PersonService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, [])

  const peopleToShow = newSearch.length > 0
    ? persons.filter(person => person.name.includes(newSearch))
    : persons

  const addPerson = (event) => {
      event.preventDefault()

      const personObject = {
        name   : newName,
        number : newNumber,
        id : `${persons.length + 1}`
      }

      if(persons.map(a=>a.name).includes(newName)){
        window.alert(`${newName} is already in the phonebook!`)
      }else{
          PersonService
            .createPerson(personObject)
              .then(response => {
                  setPersons(persons.concat(response))
                  setErrorMessage(`${personObject.name} was added!`)
              })
      }
      setTimeout(() => {
        setErrorMessage(null)
        }, 5000)
      setNewName("")
      setNewNumber("")
  }

  const deletePerson = (person) => {
    window.confirm(`Do you want to delete ${person.name}`)
    PersonService
      .deletePerson(person.id)   
        .then(persons => {
          setPersons(persons.filter(p => p.id !== person.id))
          setErrorMessage(`${person.name} was deleted!`)
        })     
        .catch(error => {
          setErrorMessage(`ERROR: ${person.name} was already deleted from the server.`)
        }) 
        setTimeout(() => {
          setErrorMessage(null)
          }, 5000)
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
      <Notification message={errorMessage}/>

      <Filter newSearch={newSearch} handleSearch={handleSearch}/>

      <h3>add a new</h3>

      <PersonsForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>

      <ul>
      <Persons 
        peopleToShow={peopleToShow} 
        deletePerson={deletePerson}
      />  
      </ul>
    </div>
  )
}

export default App
