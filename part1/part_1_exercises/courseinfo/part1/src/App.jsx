import { useState } from 'react'

const Display = props => <h2>{props.title}</h2>

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

const Average = (props) => {
  return(
  <p>
    average {(props.goodTotal - props.badTotal)/(props.allTotal)}
  </p>
  )
}

const Positive = (props) => {
  return(
    <p>
      positive {(props.goodTotal/(props.allTotal)) *100}%
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setGoodValue = (newValue) => {
    setGood(newValue + 1)
    setAll(all+1)
  }

  const setNeutralValue = (newValue) => {
    setNeutral(newValue + 1)
    setAll(all+1)
  }

  const setBadValue = (newValue) => {
    setBad(newValue + 1)
    setAll(all+1)
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
      <DisplayTotals title={"all"} totalValue={all}/>
      <Average goodTotal={good} allTotal={all} badTotal={bad} />
      <Positive goodTotal={good} allTotal={all}/>
    </div>
  )
}

export default App