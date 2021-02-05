import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherCard.css'

const WeatherCard = ({dt, temp_min,  temp_max, main, icon}) => {
  const date = new Date(dt);
  return (
    <>
    <Card class="shadow-lg p-3 mb-5 bg-white rounded" >
      <Card.Img 
        className="img"
        variant="top" 
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p>Min: {temp_min}</p>
        <p>Max: {temp_max}</p>
      </Card.Body>
    </Card>
    </>
  );
};

export default WeatherCard;