import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  const [citas, guardarCitas] = useState([]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Patient Administrator</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita = {crearCita} />
          </div>
          <div className='one-half column'>
            <h2>Manage your appointments</h2>
            {
            citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
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
