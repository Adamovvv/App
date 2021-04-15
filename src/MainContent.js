import React from 'react';
import Buttons from './Buttons';
import Number from './Number';

function MainContent(props) {
    return (
        <div className="main">
            <Number />
            <Buttons />
        </div>
    );
}

export default MainContent;