import Title from './Title'
import Part from './Part'
import Total from './Total'

const Course = ({course}) => {
    const parts = course.parts

    return (
      <div>
        <Title title={course.name}/>
        {parts.map(part => 
          <Part key={part.id} part={part} />
        )}
        <Total parts={parts}/>
      </div>
    )
  }
  
  export default Course