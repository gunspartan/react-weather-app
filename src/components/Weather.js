import React from 'react';

const Weather = props => (
    <img src={props.weather} alt='weather icon' className='weather_icon' />
);

export default Weather;