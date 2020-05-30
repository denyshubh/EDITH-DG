import React from 'react';
import './App.css';
import CarList from '../carlist.jsx';
import Header from '../navbar.jsx';
import TopSlideShow from '../topSlideshow.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSlideShow />
      <CarList/>
    </div>
  );
}

export default App;
