import React from 'react'
import { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Special } from '../pages/Special'

export const Footer = () => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`${!open ? 'footBar' : 'footBar footOpen'}`}
      onClick={() => setOpen(!open)}
    >
      <div className="footCenter">
        <h2>Day'Special</h2>
        <Special />
      </div>
    </div>
  )
}
