import { useState } from 'react'

const Display = props => <h2>{props.title}</h2>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return(
  <p>good {props.goodTotal}<br />
     neutral {props.neutralTotal}<br />
     bad {props.badTotal}<br />
     all {props.allTotal}<br />
     average {(props.goodTotal - props.badTotal)/(props.goodTotal + props.neutralTotal + props.badTotal)}<br />
     positive {(props.goodTotal/(props.goodTotal + props.neutralTotal + props.badTotal)) *100}%</p>
  )
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
      <Statistics goodTotal={good} neutralTotal={neutral} badTotal={bad}/>
    </div>
  )
}

export default App