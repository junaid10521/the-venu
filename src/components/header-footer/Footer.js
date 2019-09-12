import React from 'react';
import Roll from 'react-reveal/Roll';

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Roll delay={500}>
                <div className='font_righteous footer_logo_venue'>
                    The Venue
                </div>
                <div className='footer_copyright'>
                    The Venue 2019. All rights reserved.
                </div>
            </Roll>
        </footer>
    );
};

export default Footer;