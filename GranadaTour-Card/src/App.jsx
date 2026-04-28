/* 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
**/

import TourCardBasic from "./components/organismos/TourCardBasic";
import TourCard from "./components/organismos/TourCard";


import './App.css'
import TourCardProps from "./components/organismos/TourCardProps";

function App() {
  return (
    <div className="container">

      <TourCardBasic />
      <TourCard />

      {/* Desactivado   
      
     
       <TourCardProps 
        title="Free Tours"
        description="Free Tours en Granada. Escoge uno de nuestros dos itinerarios disponibles."
        image="https://walkingranada.com/wp-content/uploads/2023/01/freetour-card.webp"
        buttonText="Saber más >"
      /> 



      <TourCardProps 
        title="Alhambra"
        description="Descubre la Alhambra, sus jardines y palacios. Visita guiada privada o en grupo."
        image="https://walkingranada.com/wp-content/uploads/2023/01/Alhambra-card-walkin.webp"
        buttonText="Saber más >"
      /> 
    

       <TourCardProps 
        title="Visitas Guiadas"
        description="Visitas guiadas a medida para ti y tu grupo. Descubre los secretos de Granada."
        image="https://walkingranada.com/wp-content/uploads/2023/01/visitas-guiadas-card.webp"
        buttonText="Saber más >"
      />

      <TourCardProps 
        title="Experiencias"
        description="Rutas diferentes, excursiones y experiencias únicas para descubrir Granada."
        image="https://walkingranada.com/wp-content/uploads/2023/01/Alhambra-card-walkin.webp"
        buttonText="Saber más >"
      />

      */}




     
    </div>
  );
}

export default App

