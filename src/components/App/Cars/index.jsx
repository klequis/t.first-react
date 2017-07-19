import React from 'react'
import { cars } from './car-data'
import Car from './Car'

const Cars = () => {
  let carsArray = cars.map((c) => {
    return (
      <Car
        key={c.id}
        name={c.name}
        image={c.image}
      />
    )
  })
  return (
    <div>
      {carsArray}
    </div>
  )
}

export default Cars
