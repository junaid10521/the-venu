import React from 'react';
import Flip from 'react-reveal/Flip';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNFO = () => {
    return (
        <div className="bck_black">

            <div className="center_wrapper">

                <div className="vn_wrapper">

                    <Flip top duration={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{
                                        background: `url(${icon_calendar})`
                                    }}></div>

                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>

                                    <div className="vn_desc">
                                        14 Aug 2020 <br/>
                                        @ 09.00 AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    
                    <Flip top duration={1000} delay={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon" style={{
                                        background: `url(${icon_location})`
                                    }}></div>

                                    <div className="vn_title">
                                        Event Location
                                    </div>

                                    <div className="vn_desc">
                                        Askari 6 <br/>
                                        Nasir Bagh Road
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    

                </div>

            </div>
            
        </div>
    );
};

export default VenueNFO;