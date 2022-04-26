import React from 'react';

const Cita = ({cita, eliminarCita}) => (

    <div className='cita'>
        <p>Pet's Name: <span>{cita.mascota}</span> </p>
        <p>Owner's Name: <span>{cita.propietario}</span> </p>
        <p>Date: <span>{cita.fecha}</span> </p>
        <p>Time: <span>{cita.hora}</span> </p>
        <p>Symptoms: <span>{cita.sintomas}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id)  }
        >Delete &times;</button>
    </div>
);
 
export default Cita;