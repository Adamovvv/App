import React from 'react';
import logo from './logo.svg'

function FooterLogo(props) {
    return (
        <div className="footerLogo">
            <img src={logo} alt="footerLogo"/>
        </div>
    );
}

export default FooterLogo;