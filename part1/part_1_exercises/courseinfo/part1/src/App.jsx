import { useState } from 'react'

const Display = props => <div><b>{props.title}</b></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const DisplayTotals = (props) => {
  return(
  <p>
    {props.title} {props.totalValue}
  </p>)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (newValue) => {
    console.log("New value is", newValue)
    setGood(newValue + 1)
  }

  const setNeutralValue = (newValue) => {
    console.log("New value is", newValue)
    setNeutral(newValue + 1)
  }

  const setBadValue = (newValue) => {
    console.log("New value is", newValue)
    setBad(newValue + 1)
  }

  const title = "give feedback"
  const stats = "statistics"

  return (
    <div>
      <Display title={title}/>
      <p></p>
      <Button handleClick={() => setGoodValue(good)} text = {"good"}/>
      <Button handleClick={() => setNeutralValue(neutral)} text = {"neutral"}/>
      <Button handleClick={() => setBadValue(bad)} text = {"bad"}/>
      <p></p>
      <Display title={stats}/>
      <p></p>
      <DisplayTotals title={"good"} totalValue={good}/>
      <DisplayTotals title={"neutral"} totalValue={neutral}/>
      <DisplayTotals title={"bad"} totalValue={bad}/>
    </div>
  )
}

export default App