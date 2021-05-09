import React from 'react';
import castle from '../../images/castle.png';
import dragon from '../../images/dragon.png';
import penguin from '../../images/penguin.png';

const Home = () => {
 
    return (
        <>
            <main id="homepage">
                <div className="landing-images">
                <img id="penguin-img" src={penguin}/>
                <img id="castle-img" src={castle}/>
                <img id="dragon-img" src={dragon}/>
                </div>
            </main>
        </>
    )
}

export default Home;