import React from 'react'
import './floatingdiv.css'

/*Mettre le text en props le rend dynamique*/
function FloatingDiv({image, txt1, txt2}) {
  return (
    <div className="floatingdiv">
        <img src={image} alt="" />
        <span>
            {txt1} 
            <br/>
            {txt2}
        </span>

    </div>
  )
}

export default FloatingDiv