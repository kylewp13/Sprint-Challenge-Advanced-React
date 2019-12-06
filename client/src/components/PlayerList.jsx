import React from 'react';
import Player from './Player';

const PlayerList = (props) => {

    return (
        <div>
         {props.data.map( item => (
          <Player key={item.id} data={item}/>
         ))}
        </div>
      );
};

export default PlayerList;