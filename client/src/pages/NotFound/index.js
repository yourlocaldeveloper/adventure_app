import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    return (
        <>
            <header>
                <h1>🧐 Oops!</h1>
                <h5>...can't find {history.location.pathname}!</h5>
            </header>
        </>
    )
}

export default NotFound;