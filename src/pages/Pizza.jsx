import React from 'react'
import { PizzaCard } from '../components/PizzaCard'
import { data } from '../data'

export const Pizza = () => {
  return (
    <div className='pizza-page'>
      <div className='hero-pizza'>
        <h1>Le Classiche</h1>
      </div>
      <div className='pizza-grid'>
        <div className='pizza-cards'>
          {data.map((data) => {
            return <PizzaCard key={data.id} {...data} />
          })}
        </div>
      </div>
    </div>
  )
}
