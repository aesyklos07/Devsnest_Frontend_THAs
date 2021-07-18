
import React from "react";
import './style.css';
import Card from "./components/Card" 

function App() {
  return (
    
    <div className="container">
      <h1>Calorie Read Only !!</h1>
    <div className="App">
    
    <Card img="/img/pizza.jpg" title="Pizza" subtitle="56" />
    <Card img="/img/burger.jpg" title="Burger" subtitle="45"/>
    <Card img="/img/pani.jpg" title="Pani Puri" subtitle="35"/>
    <Card img="/img/cake.jpg" title="Cake" subtitle="20"/>
    </div>
    </div>
  );
}

export default App;
