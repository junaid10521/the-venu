import React from 'react';

import Slider from 'react-slick';
import Slideone from '../../resources/images/slide_one.jpg';
import Slidetwo from '../../resources/images/slide_two.jpg';
import Slidethree from '../../resources/images/slide_three.jpg';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }


    return (
        <div className="carrousel_wrapper" style={{
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
        }}>

            <Slider {...settings}>

                <div>  

                    <div className="carrousel_image" style={{
                        background: `url(${Slideone})`,
                        height: `${window.innerHeight}px`
                    }}></div>

                </div>

                <div>
                   
                    <div className="carrousel_image" style={{
                            background: `url(${Slidetwo})`,
                            height: `${window.innerHeight}px`
                    }}></div>

                </div>

                <div>

                    <div className="carrousel_image" style={{
                            background: `url(${Slidethree})`,
                            height: `${window.innerHeight}px`
                    }}></div>
                    
                </div>

            </Slider>
            
        </div>
    );
};

export default Carousel;