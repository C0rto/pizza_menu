import React, { useState } from 'react'
import gluten from '../assets/gluten.svg'
import dairy from '../assets/dairy.svg'
import corn from '../assets/corn.svg'
import { MdNavigateNext } from 'react-icons/md'

export const PizzaCard = () => {
  const [front, setFront] = useState(true)
  return (
    <div className="pizza-card">
      {/* Card Front */}
      <div className="card-side card-front">
        <div className="card-header">
          <img
            src="https://www.lemilleeunabontadifranci.it/wp-content/uploads/2021/04/Pizza-margherita-fatta-in-casa-orizzontale.jpg"
            alt=""
            className="card-img"
          />
          <div className="card-price">
            6<span></span>€
          </div>
        </div>
        <div className="card-body">
          <h3>La Margherita</h3>
          <div className="underline"></div>
          <div className="card-info">
            <div className="card-desc">
              <p>
                Pomodoro, mozzarella e basilico su una base lievitata 24 ore. La
                nostra margherita è un tripudio di sapori.
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="footer-info">
            {/* <h6>Allergeni</h6> */}
            <img src={gluten} alt="" className="card-icon" />
            <img src={dairy} alt="" className="card-icon" />
            <img src={corn} alt="" className="card-icon" />
          </div>
          <div>
            <button className="card-btn" onClick={() => setFront(!front)}>
              Più Info <MdNavigateNext style={{ fontSize: '1.3rem' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
