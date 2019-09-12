import React from 'react';

import Carousel from './Carousel';
import Timeuntil from './Timeuntil';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carousel />

            <div className="artist_name">
                <div className="wrapper">
                    Nasir Khan Jan
                </div>
            </div>

            <Timeuntil />

        </div>
    );
};

export default Featured;