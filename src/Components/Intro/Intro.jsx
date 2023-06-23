import React from 'react'
import'./intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'


function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            <span>Greetings! I Am</span>
            <span>Aline Behalal</span>
            <span>A passionate Junior Frontend Developer eager to kickstart
            my career in web development. Recently graduated and mastered the fundamentals
            of HTML, CSS, and JavaScript.</span>
            </div>
            <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href="https://github.com/Hileene">
            <img src={Github} alt="" />
            </a>

            <a href="https://linkedin.com/in/alinebehalal">
            <img src={Linkedin} alt="" />
            </a>

        </div>
        </div>

        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />

        <div style={{top: '-4%', left: '68%'}}>
          <FloatingDiv image={Crown} txt1= 'Web' txt2='Developer' />
        </div>

        <div style={{top: '18rem', left: '0rem'}}>
          <FloatingDiv image={thumbup} txt1= 'Best Design' txt2='Award' />
        </div>
    {/*blur divs*/}
    <div className="blur" style= {{background: 'rgb (238 2210 255)'}}></div>
    <div className="blur" style= {{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro