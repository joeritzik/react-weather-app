import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import WeatherList from './components/WeatherList';
require('dotenv').config()

function App() {
  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <div className="body">
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/forecast?q=${city}&units=imperial&cnt=5&appid=${process.env.REACT_APP_API_KEY}`)} />
      {getContent()}
    </Container>
    </div>
  );
};

export default App;