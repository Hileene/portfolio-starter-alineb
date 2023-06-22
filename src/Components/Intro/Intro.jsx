import React from 'react'
import'./intro.css'

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name"></div>
            <span>Greetings! I Am</span>
            <span>Aline Behalal</span>
            <span>A passionate Junior Frontend Developer eager to kickstart
            my career in web development.Though I may not have industry experience just yet,
            my insatiable curiosity and self-motivation have driven me to master the fundamentals
            of HTML, CSS, and JavaScript</span>
            <button className="button i-button">Hire me</button>
        </div>

        <div className="i-right"></div>
    </div>
  )
}

export default Intro