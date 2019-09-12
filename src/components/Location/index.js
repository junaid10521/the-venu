import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6613.575529274416!2d71.45038562333058!3d34.0236583646082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9113fcf365415%3A0x48069b914f9a2770!2sAskari+6+Peshawar%2C+Khyber+Pakhtunkhwa%2C+Pakistan!5e0!3m2!1sen!2s!4v1560793417446!5m2!1sen!2s"
             width="100%"
             height="500px" 
             frameBorder="0"  
             allowFullScreen></iframe>

             <div className='location_tag'>
                <div>Location</div>
             </div>
        </div>
    );
};

export default Location;