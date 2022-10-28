// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
// import CardExampleCard from './components/Cards/Cards';
// import axios from "axios";


function App() {

  const [characters,setCharacters] = useState([])

  useEffect(() => {
    async function fetch1 () {
      const response = await fetch('https://rickandmortyapi.com/api/character');
     const data = await response.json();
     console.log(data.results);
    }
    fetch1()
  }, []);



  


  return (<div>
    <h1>Rick and Morty API</h1>
   {
   characters.map (characters => {
    return (
      <div> 
      <h2>{character.name}</h2>
      <div/>
    )
   })
   }
  </div>  

  
}


export default App;
