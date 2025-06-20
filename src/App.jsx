import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      var [counter , setcounter] =useState(15);
  const addValue =()=>{
    if(counter == 20){
      counter = 0;
    }
     setcounter(counter+1);
     
     
    
  }
const dvalue =()=>{
  if(counter == 0){
    counter= 20;
  }
  setcounter(counter-1);
 
}
  return (
    <>
  <h1>Kiran Kumar </h1>
  <h2> Points : {counter} </h2>
  <button onClick={addValue}>Add Points {counter}</button>
  <br/>
  <button onClick={dvalue}> Decrease Points {counter}</button>
  <p>Use case of react on single click you are seeing so many changes </p>
    </>
  )
}

export default App
