const Persons = ({ peopleToShow }) => {
    return (
        <ul>
        {peopleToShow.map((person, index) => 
          <li key={index}>{person.name} {person.number}</li>
        )}
      </ul>  
      )
  }
  
  export default Persons