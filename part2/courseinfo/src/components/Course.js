const Header = (props) => {
    return <h1>{props.course}</h1>
  }
  
const Total = (props) => {
return <p>Number of exercises {props.sumOfExercises}</p>
}

const Part = (props) => {
return (
    <p>
    {props.part} {props.exercises}
    </p>
)
}

const Content = (props) => {
return (
    props.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)
)
}

const Course = (props) => {
return (
<div>
    <Header course={props.course.name} />
    <Content parts={props.course.parts}/>
    <Total sumOfExercises={props.course.parts.reduce((acc, curr) => acc + curr.exercises, 0)}/>
</div>
)
}

export default Course