import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] );

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
 }


  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No Appointments' : 'Manage your appointments';

  return (
    <Fragment>
      <h1>Patient Administrator</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita = {crearCita} />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {
            citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
