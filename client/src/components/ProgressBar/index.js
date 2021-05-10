import React from 'react';
import dragon from '../../images/dragon.png'
import penguin from '../../images/penguin.png'
import castle from '../../images/castle.png'

const ProgressBar = () => {
 
    return (
        <div id="progress-bar" className="outer-bar">
          <div className="inner-bar">
            <img src={dragon} alt="A Dragon" className="dragon-bar"/>
            <img src={penguin} alt="A Penguin" className="penguin-bar"/>
          </div>
          <img src={castle} alt="A Castle" className="castle-bar"/>
        </div>
    )
}

export default ProgressBar;