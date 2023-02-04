import React from 'react'
import { PizzaCard } from '../components/PizzaCard'

export const Pizza = () => {
  return (
    <div className="pizza-page">
      <div className="hero-pizza">
        <h1>Le Classiche</h1>
      </div>
      <div className="pizza-grid">
        <div className="pizza-cards">
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  )
}
