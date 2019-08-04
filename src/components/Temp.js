import React from 'react';

const Temp = props => (
    <section className='temp'>
        <div className='temp-high'>
            <h5>{ props.tempHigh }{'\u2109'}</h5>
        </div>
        <div className='temp-low'>
            <h5>{ props.tempLow }{'\u2109'}</h5>
        </div>
    </section>
);

export default Temp;