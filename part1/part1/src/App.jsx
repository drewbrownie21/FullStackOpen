const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}



const Footer = () => {
  return(
    <div>
      Greeting App by <a href='wwww.google.com'>DREW </a>
    </div>
  )
}

const App = () => {
  const friends = ['Peter', 'Jack']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App