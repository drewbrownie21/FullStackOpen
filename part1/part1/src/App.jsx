import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne = () => setCounter(counter-1)
  const reset = () => setCounter(0)

  return (
    <div>
      <div><Display counter={counter}/></div>

      <Button onClick={increaseByOne} text={"Plus"}/>
      <Button onClick={decreaseByOne} text={"Minus"}/>
      <Button onClick={reset} text={"Reset"}/>


    </div>
  )
}

export default App