import React from 'react';

const Player = (props) => {

    return(
        <div>
            <h3>Player: {props.data.name}</h3>
            <p>Country: {props.data.country}</p>
            <p>Searched: {props.data.searches}</p>
        </div>
    );
};

export default Player;