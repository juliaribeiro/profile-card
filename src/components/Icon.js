import React from 'react';
import { icons } from 'react-icons';

const Icon=(props) => {

    return (
        <a href={props.link} target="_blank"> 
        <svg class="icon icon-bubble icon-larger">
          <use xlinkHref={ '#'+props.name }/> 
        </svg>
      </a>
    )
};

export default Icon;