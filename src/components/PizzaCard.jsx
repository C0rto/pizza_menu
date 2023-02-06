import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import gluten from '../assets/gluten.svg'
import dairy from '../assets/dairy.svg'
import corn from '../assets/corn.svg'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

export const PizzaCard = ({
  id,
  img,
  name,
  price,
  description,
  ingredients,
  suggestions,
  nutritionFacts,
  carbo,
  protein,
  fat,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className='pizza-card' key={id}>
      <ReactCardFlip isFlipped={isFlipped}>
        {/* ---------------------------CARD-FRONT-------------------------------- */}
        <div className='card-side card-front'>
          {/* CARD HEADER */}
          <div className='card-header'>
            <img src={img} alt='' className='card-img' />
            <div className='card-price'>
              {price}
              <span></span>€
            </div>
          </div>
          {/* CARD-BODY */}
          <div className='card-body'>
            <h2 style={{ textAlign: 'center' }}>{name}</h2>
            <div className='underline'></div>
            <div className='card-info'>
              <div className='card-desc'>
                <p>{description}</p>
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
              <h3
                style={{
                  color: '#f44708',
                  fontFamily: ' Dancing Script',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                Ingredienti
              </h3>
              <div className='card-info'>
                <div className='card-desc'>
                  <p>{ingredients}</p>
                </div>
              </div>
            </div>
            <div className='back-section'>
              <h3
                style={{
                  color: '#f44708',
                  fontFamily: ' Dancing Script',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                Birre Consigliate
              </h3>
              <div className='card-info'>
                <div className='card-desc'>
                  <p>{suggestions}</p>
                </div>
              </div>
            </div>
            <div className='back-section'>
              <h3
                style={{
                  color: '#f44708',
                  fontFamily: ' Dancing Script',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                Valori Nutrizionali
              </h3>
              <div className='card-info'>
                <div className='card-desc'>
                  <p>{nutritionFacts}</p>
                  <div className='nutry'>
                    <div className='card-nutry'>
                      {/* bar */}
                      <p>carboidrati</p>
                      <div class='container'>
                        <div class='progress progress-striped'>
                          <div
                            class='progress-bar'
                            style={{ width: `${carbo}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className='card-nutry'>
                      {/* bar */}
                      <p>proteine</p>
                      <div class='container'>
                        <div class='progress progress-striped'>
                          <div
                            class='progress-bar'
                            style={{ width: `${protein}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className='card-nutry'>
                      {/* bar */}
                      <p>grassi</p>
                      <div class='container'>
                        <div class='progress progress-striped'>
                          <div
                            class='progress-bar'
                            style={{ width: `${fat}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
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
