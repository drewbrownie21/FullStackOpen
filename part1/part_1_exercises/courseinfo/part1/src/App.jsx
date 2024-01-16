import { useState } from 'react'

const Display = props => <h2>{props.title}</h2>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if(total > 0){
  return(
  <p>good {good}<br />
     neutral {neutral}<br />
     bad {bad}<br />
     all {good + neutral + bad}<br />
     average {(good - bad)/(good + neutral + bad)}<br />
     positive {(good/(good + neutral + bad)) *100}%</p>
  ) 
}
return <div>No Feedback Given</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const stats = "statistics"

  return (
    <div>
      <Display title={title}/>
      <p></p>
      <Button handleClick={() => setGood(good+1)} text = {"good"}/>
      <Button handleClick={() => setNeutral(neutral+1)} text = {"neutral"}/>
      <Button handleClick={() => setBad(bad+1)} text = {"bad"}/>
      <p></p>
      <Display title={stats}/>
      <p></p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App