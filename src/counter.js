import React from 'react';

const Counter = ({counter, dec, inc, rnd, del}) => {
    return (
<div>
<div className = 'jambotron'></div>
        <div className="wrapper">
    <h1>{counter}</h1>
        </div>
      <div class="wrapperbtn">
        <button onClick = {dec} className="btn btn-primary">DEC</button>
        <button onClick = {inc} className="btn btn-primary">INC</button>
        <button onClick = {rnd} className="btn btn-primary">RND</button>
        <button onClick = {del} className="btn btn-primary">DEL</button>
      </div>
</div>
    );
}

export default Counter;