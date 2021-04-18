import React from 'react';
import footerLogo from './footerLogo.svg';

function FooterLogo(props) {
    return (
        <div className="footerLogo">
            <img src={footerLogo} alt="footerLogo"/>
        </div>
    );
}

export default FooterLogo;