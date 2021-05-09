import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import castle from '../../images/castle.png';
import dragon from '../../images/dragon.png';
import penguin from '../../images/penguin.png';

const Home = () => {
    const [display, setDisplay] = useState(false)

    const history = useHistory();

    const handleClick = () => {
        history.push("/game");
    }

    const getHelp = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div className="help-container" style={display ? { display: "block" } : { display: "none" }}>
                <div className="show-help">
                    <p>This is a text-based adventure game created by Aaron & Natalie etc etc etc.. This is how to play and visit our repo plsssss</p>
                </div>
            </div>
            <header id="help">
                <button onClick={getHelp} aria-label="how to play and more info">??</button>
            </header>

            <main id="homepage">
                <div class="wrapper-homepage">
                    <div className="landing-images">
                        <img id="penguin-img" src={penguin} />
                        <img id="castle-img" src={castle} />
                        <img id="dragon-img" src={dragon} />
                    </div>
                    <div className="enter-button">
                        <button onClick={handleClick}>Enter The Castle</button>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Home;