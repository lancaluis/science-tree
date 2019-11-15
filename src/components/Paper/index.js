import React from 'react';
import './styles.scss';

export default function Paper(props) {
    return(
        <div className="paper">
            {props.children}
        </div>
    );
}