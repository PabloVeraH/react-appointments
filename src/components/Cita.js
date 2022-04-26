import React from 'react';

const Cita = ({cita}) => (

    <div className='cita'>
        <p>Pet's Name: <span>{cita.mascota}</span> </p>
        <p>Owner's Name: <span>{cita.propietario}</span> </p>
        <p>Date: <span>{cita.fecha}</span> </p>
        <p>Time: <span>{cita.hora}</span> </p>
        <p>Symptoms: <span>{cita.sintomas}</span> </p>
    </div>
);
 
export default Cita;