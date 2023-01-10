import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header"
import Form from "./components/Form"
import Content from './components/Content';
function App() {

  const [hist,setHist]=useState(["","",""]);
  
  function addInHistory(newNode){
    return(setHist(prevHist=>{
      return [...prevHist,newNode];
    }));
  }

 

  return (
    <div>
    <Header />
    <br />
    <h2>Recent Chats</h2>
    
    {hist.slice(0).reverse().map((item,index)=>{
      console.log("the values are : ",hist);

      
      return index<3 ? <Content key={index} value={item} />:null

    })}
    <Form toAdd={addInHistory}/>
   
    

   </div>
  );
}

export default App;
