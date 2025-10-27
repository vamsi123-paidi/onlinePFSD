import React from 'react'
import Card from './Card'

const Home = (props) => {
  // const name = "adam"
  return (
    <div>
        <h1>this is {props.name} from home page </h1>
        <Card name={props.name}/>
    </div>
  )
}

export default Home