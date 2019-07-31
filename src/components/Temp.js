import React from 'react';

const Temp = props => (
    <section className='temp'>
        <div className='high_temp'>
            <h5>{ props.tempHigh }{'\u2109'}</h5>
        </div>
        <div className='low_temp'>
            <h5>{ props.tempLow }{'\u2109'}</h5>
        </div>
    </section>
);

export default Temp;