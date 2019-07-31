import React from 'react';
import Day from './Day';
import Weather from './Weather';
import Temp from './Temp';

const Card = props => (
    <div className='card'>
        <section className='main'>
            <Day day={props.day} />
            <Weather weather={props.weatherURL} />
            <Temp
                tempHigh={props.tempHigh}
                tempLow={props.tempLow}
            />
        </section>
    </div>
)

export default Card;