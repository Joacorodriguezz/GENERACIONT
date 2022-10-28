import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import CardUser from './components/card/card';
import Equipos from './components/equipo/Equipo';







function App() {
  return (
    <div className="App">

      {/* <Header title="Clase de ReactJs" subTitulo="Hoy nuestra primera pagina"/>
      
      <div>
      <div className='userSecction'>
        <CardUser name="Matias" join="Join in 2017" descrip="Matias is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."/>
        <CardUser name="Juan" join="Join in 2020"  descrip="Juan is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."/>
        <CardUser name="Eduardo" join="Join in 2021" descrip="Juan is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." />
      </div>

      </div> */}

      <Equipos/>
      

      
      
    </div>
  );
}

export default App;
