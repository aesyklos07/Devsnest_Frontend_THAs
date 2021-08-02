import './App.css';
import Head from './components.js/header';
import {useState} from 'react';
import CalorieBox from './components.js/caloriebox';

function App() {

  const data=[
    {name:"Pizza",
    cal:100},
    {
      name:"Burger",
      cal:80
    },
    {
      name:"Samosa",
      cal:40
    },
    {
      name:"Pasta",
      cal:30
    },
    {
      name:"LAUNGLATTA",
      cal:40
    },
    {
      name:"Momos",
      cal:50
    }
  ]
  const [Foods,SetFood]= useState(data)
  let NewFoods= [...Foods]
  const HandleDelete =(id)=>{
    NewFoods = Foods.filter(Food => Food!==Foods[id])
    SetFood(NewFoods)
  }

  const empty=()=>{
    if(NewFoods.length ===0){
      return <h1>Empty Item</h1>
    }
  }

  return (
    <div className="App">
      <Head/>
      <div className="container">
        {
          NewFoods.map((item, id) =>{
           return (
             <CalorieBox
             key={id}
             id={id}
             item={item}
             HandleDelete=  {HandleDelete}
             ></CalorieBox>
           );
          })
        }
        {empty() }
      </div>
    </div>
  );
}

export default App;
