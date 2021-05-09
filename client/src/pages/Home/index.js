import React from 'react';
import { useHistory } from "react-router-dom";
import castle from '../../images/castle.png';
import dragon from '../../images/dragon.png';
import penguin from '../../images/penguin.png';

const Home = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/game");
    }

    return (
        <>
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