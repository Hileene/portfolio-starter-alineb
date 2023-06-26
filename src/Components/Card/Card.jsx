import React from 'react'
import './card.css'

function Card({emoji, heading, detail}) {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        {/*Avant la mise en forme le bouton est à l'exterieur de la carte car l'image et le texte sont trop grands*/}
        <button className="c-button">LEARN MORE</button> 

    </div>
  )
}

export default Card