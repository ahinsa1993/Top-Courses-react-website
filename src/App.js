import './App.css';
import "./index.css";
import React from 'react';
import Card from './Card';
import Sdata from "./Sdata";

function App(){

  function ncard(val){
    return(
      <Card 
      key ={val.id}
      src ={val.scr}
      name ={val.sname}
      title ={val.title}
      link ={val.link}
      />
    )
  }
  return(
    <>
        <h1 className='heading'>Top 5 JavaScript Framwork</h1>
          {Sdata.map(ncard)}
  </>
  )
}

export default App;
