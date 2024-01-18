const Total = ({parts}) => {
    const total = parts.reduce((totalVal, parts) =>
    totalVal + parts.exercises, 0
)
    return (
      <b>
        The Total of the exercises is: {total}
      </b>
    )
  }
  
  export default Total