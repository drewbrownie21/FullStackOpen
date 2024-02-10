import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import PersonService from './services/personService'

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
        window.confirm(`${newName} is already in the phonebook! Do you want to replace the existing number?`)
        //Update the person
        const existingPerson = persons.find(person => person.name == newName)
        updatePerson(existingPerson, newNumber)
      }else{
          PersonService
            .createPerson(personObject)
              .then(response => {
                  setPersons(persons.concat(response))
                  setNewName("")
                  setNewNumber("")
              })      
      }
  }

  const updatePerson = (personObject, newNumber) => {
    const updatedPersonObject = {
      name   : personObject.name,
      number : newNumber,
      id : personObject.id
    }
    PersonService
      .updatePerson(updatedPersonObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== personObject.id ? person : returnedPerson))
      })
  }


  const deletePerson = (person) => {
    window.confirm(`Do you want to delete ${person.name}`)
    PersonService
      .deletePerson(person.id)   
        .then(persons => {
          setPersons(persons.filter(p => p.id !== person.id))
        }) 
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
