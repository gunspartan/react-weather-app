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

      </div>
    )
  }
}
