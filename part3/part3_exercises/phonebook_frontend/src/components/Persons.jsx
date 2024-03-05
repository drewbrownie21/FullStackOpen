const Persons = ({ peopleToShow, deletePerson }) => {
    return (
        <ul>
        {peopleToShow.map((person, index) => 
          <li key={index}>{person.name} {person.number}
          <button onClick={() => deletePerson(person)}>Delete</button>
          </li>
        )}
      </ul>  
      )
  }
  
  export default Persons
  