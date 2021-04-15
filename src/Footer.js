import React from 'react';
import Copyright from './Copyright';
import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';

function Footer(props) {
    return (
        <div className="footer">
            <FooterLogo />
            <FooterMenu />
            <Copyright />
        </div>
    );
}

export default Footer;