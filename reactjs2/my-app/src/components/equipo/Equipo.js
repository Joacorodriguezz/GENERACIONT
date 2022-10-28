import React from 'react'

function Equipos() {
    const equipos =["Argentina","Brasil","Peru","Colombia"]

    const listItems = equipos.map((equipo) =>
    console.log(equipo)
    );

  return (
    <>
    <div>Listado de equipos</div>
    <ul>{listItems}</ul>
    
      
  
   </>
  )
}

export default Equipos