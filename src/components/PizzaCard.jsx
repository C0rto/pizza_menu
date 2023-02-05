import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import gluten from '../assets/gluten.svg'
import dairy from '../assets/dairy.svg'
import corn from '../assets/corn.svg'
import beer from '../assets/beer.png'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

export const PizzaCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div className='pizza-card'>
      <ReactCardFlip isFlipped={isFlipped}>
        {/* ---------------------------CARD-FRONT-------------------------------- */}

        <div className='card-side card-front'>
          {/* CARD HEADER */}
          <div className='card-header'>
            <img
              src='https://www.lemilleeunabontadifranci.it/wp-content/uploads/2021/04/Pizza-margherita-fatta-in-casa-orizzontale.jpg'
              alt=''
              className='card-img'
            />
            <div className='card-price'>
              6<span></span>€
            </div>
          </div>
          {/* CARD-BODY */}
          <div className='card-body'>
            <h3>La Margherita</h3>
            <div className='underline'></div>
            <div className='card-info'>
              <div className='card-desc'>
                <p>
                  Pomodoro, mozzarella e basilico su una base lievitata 24 ore.
                  La nostra margherita è un tripudio di sapori.
                </p>
              </div>
            </div>
          </div>
          {/* CARD FOOTER */}
          <div className='card-footer'>
            <div className='footer-info'>
              {/* <h6>Allergeni</h6> */}
              <img src={gluten} alt='' className='card-icon' />
              <img src={dairy} alt='' className='card-icon' />
              <img src={corn} alt='' className='card-icon' />
            </div>
            <div>
              <button
                className='card-btn'
                onClick={() => setIsFlipped(!isFlipped)}
              >
                Più Info <MdNavigateNext style={{ fontSize: '1.4rem' }} />
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------------CARD-BACK-------------------------------- */}

        <div className='card-side card-back back'>
          <div className='card-header '></div>
          <div className='card-body' style={{ height: '400px' }}>
            <div className='back-section'>
              <h3>Ingredienti</h3>
              <div className='card-info'>
                <div className='card-desc'>
                  <p>
                    Pomodoro, mozzarella e basilico su una base lievitata 24
                    ore. La nostra margherita è un tripudio di sapori.
                  </p>
                </div>
              </div>
            </div>
            <div className='back-section'>
              <img src={beer} alt='https://www.freepik.com' />

              <h3>Birre Consigliate</h3>
              <div className='card-info'>
                <div className='card-desc'>
                  <p>
                    Pomodoro, mozzarella e basilico su una base lievitata 24
                    ore. La nostra margherita è un tripudio di sapori.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='card-footer' style={{ justifyContent: 'end' }}>
            <button
              className='card-btn'
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <MdNavigateBefore style={{ fontSize: '1.4rem' }} /> Indietro
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
