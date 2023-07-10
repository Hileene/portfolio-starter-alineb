import React from 'react'
import './services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
/*import Resume from './fake-resume.pdf'*/
import { themeContext } from '../../Context'
import { useContext } from "react";


function Services() {

    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

  return (
    <div className="services">

        {/*côté gauche*/}
        <div className="awesome">
            <span style= {{color: darkMode? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span>Lorem Ipsum is simply dummy text of the printing of the printing Lorem
                <br/>
                 Ipsum is simply a dummy text of printing
            </span>
            {/*<a href={Resume} download>*/}
            <button className="button s-button">Download CV</button>
            {/*</a>*/}
            <div className="blur s-blur1" style= {{ background: '#ABF1FF94'}}></div>
        </div>

        {/*côté droit*/}
        <div className="cards">

            <div style={{left: '14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Figma, Sketch, PhotoShop, Adobe, Adobe xd'}
                />
            </div>

                    {/* 2ème carte*/}
            <div style={{top: '12rem', left: '-4rem'}}>
                <Card 
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {'Html, Css, JavaScript, React'}
                />
            </div>

                    {/* 3ème carte*/}
             <div style={{top: '19rem', left: '12rem'}}>
                <Card 
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {
                    'Loem Ipsum dummy text are usually in section where we need some random text'}
                />
            </div>
            <div className="blur s-blur2" style= {{ background: 'var(--purple)'}}></div>

        

        </div>

    </div>
  )
}

export default Services