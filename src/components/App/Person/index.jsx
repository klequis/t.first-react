import React from 'react'

const Person = (props) => {
  return (
    <div>
      <p>{props.name}, {props.city}</p>
    </div>
  )
}

export default Person
