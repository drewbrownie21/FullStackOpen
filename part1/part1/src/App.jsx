import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setNewValue = (newValue) => {
    console.log("New value is", newValue)
    setValue(newValue)
  }

  return(
    <div>
      <Display value={value} />
      <Button handleClick={() => setNewValue(1000)} text = {"Thousand"}/>
      <Button handleClick={() => setNewValue(value+1)} text = {"Increment"}/>
      <Button handleClick={() => setNewValue(0)} text = {"Reset"}/>
    </div>
  )
}

export default App