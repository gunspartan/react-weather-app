import React, { Component } from 'react';
import '../styles/App.css';
import forecast from '../forecast';
import Card from './Card';
import sunny from '../img/sunny.png'
import rainy from '../img/rainy.png'
import cloudy from '../img/cloudy.png'
import snowy from '../img/snowy.png'


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='monday'>
          <Card
            day={forecast[0].day}
            weatherURL={sunny}
            tempHigh={forecast[0].tempHigh}
            tempLow={forecast[0].tempLow}
          />
        </div>
        <div className='tuesday'>
          <Card
            day={forecast[1].day}
            weatherURL={sunny}
            tempHigh={forecast[1].tempHigh}
            tempLow={forecast[1].tempLow}
          />
        </div>
        <div className='wednesday'>
          <Card
            day={forecast[2].day}
            weatherURL={rainy}
            tempHigh={forecast[2].tempHigh}
            tempLow={forecast[2].tempLow}
          />
        </div>
        <div className='thursday'>
          <Card
            day={forecast[3].day}
            weatherURL={cloudy}
            tempHigh={forecast[3].tempHigh}
            tempLow={forecast[3].tempLow}
          />
        </div>
        <div className='friday'>
          <Card
            day={forecast[4].day}
            weatherURL={snowy}
            tempHigh={forecast[4].tempHigh}
            tempLow={forecast[4].tempLow}
          />
        </div>

      </div>
    )
  }
}
