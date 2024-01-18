import Title from './Title'
import Part from './Part'

const Course = ({course}) => {
    const parts = course.parts
    return (
      <div>
        <Title title={course.name}/>
        {parts.map(part => 
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  export default Course