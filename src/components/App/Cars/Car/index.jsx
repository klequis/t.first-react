import React from 'react'
import './style.css'

const Car = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} />
    </div>
  )
}

export default Car
