import React from 'react';

const InputBar = () => {
 
    return (
        <div id="input-bar">
          <form>
            <input type="text" placeholder="Enter text..." />
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}

export default InputBar;