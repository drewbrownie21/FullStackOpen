import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const setNewValue = (newValue) => () => {
    setValue(newValue)
  }

  return(
    <div>
      {value}
      <button onClick={setNewValue(1000)}>1000</button>
      <button onClick={setNewValue(10)}>10</button>
      <button onClick={setNewValue(value+1)}>Increment</button>

    </div>
  )

}

export default App