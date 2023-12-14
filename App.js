
 import React, { useState } from 'react';
//  import logo from './logo.svg';
 import './App.css';

const bulbOnImg =
   'https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png';
   //" https://img.freepik.com/free-photo/depiction-human-brain-intellect-as-lightbulb_23-2150936749.jpg?t=st=1702577003~exp=1702580603~hmac=6012c7efcee2656b6cb9836aa4cbf3ace1a3a37063bbc28269f79dfc9857422a&w=740"
const bulbOffImg =
  'https://www.cahillheating.com/sites/cahillheating.com/files/LightBulb.jpg';

function App() {
  const [message, setMessage] = useState('Hello World');
  const [bulbOn, setBulbOn] = useState(true);

  const handleToggle = () => {
    setMessage(message === 'Hello World' ? 'Hello Pakistan' : 'Hello World');
  };
  const handleBulbOn = () => {
    setBulbOn(true);
  };

  const handleBulbOff = () => {
    setBulbOn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleToggle}>
          <p>{message}</p>
        </div>
        <img  width="200"  height="230"  alt="bulb" src={bulbOn ? bulbOnImg : bulbOffImg}/>  
        <br />
        <button onClick={handleToggle}>change text</button>
        <button onClick={handleBulbOn}>Bulb On</button>
        <button onClick={handleBulbOff}>Bulb Off</button>
      </header>
    </div>
  );
}

export default App;
