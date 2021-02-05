import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
// import {API_BASE_URL, API_KEY} from '../apis/config'

const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState('');

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch(city)
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  )
}

export default CitySelector;