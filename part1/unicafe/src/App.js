import { useState } from 'react'



const Button = (props) => {
  return (
    <button onClick={props.f}> {props.text} </button>
  )
}

const StatisticLine = (props) => 
    // <p>
    //   {props.text} {props.value}
    // </p>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>


const Statistics = (props) => {
  const total = props.info.reduce((a, b) => a+b, 0)

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const score = props.info[0] - props.info[2]
  return (
    <table>
      <tbody>
      <StatisticLine text='good' value={props.info[0]} />  
      <StatisticLine text='neutral' value={props.info[1]} />  
      <StatisticLine text='bad' value={props.info[2]} />  
      <StatisticLine text='all' value={total} />  
      <StatisticLine text='average' value={score/total} />  
      <StatisticLine text='positive' value={props.info[0] / total} />
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1> give feedback</h1>
      <Button text='good' f={() => {setGood(good + 1)}}/>
      <Button text='neutral' f={() => {setNeutral(neutral + 1)}} />
      <Button text='bad' f={() => setBad(bad + 1)} />
      <h1> statistics </h1>
      <Statistics info={[good, neutral, bad]}/>
    </div>

  )
}

export default App