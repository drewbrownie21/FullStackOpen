import { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <div>
        This App is used by pressing buttons.
      </div>
    )
  }
  
  return(
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left+updatedRight)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='Left'/>
      <Button handleClick={handleRightClick} text='Right'/>
      {right}
      <History allClicks={allClicks}/>
      <p>Total Clicks: {total}</p>
    </div>
  )
}

export default App