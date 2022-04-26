import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError ] = useState(false)

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(mascota.trim() === '' || propietario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        // Asignar un ID
        cita.id = uuidv4();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
    }

    return (
        <Fragment>
            <h2>Create Appointmen</h2>

            { error ? <p className="alerta-error">All the fields are required</p> : null }

            <form onSubmit={submitCita} >
                <label>Pet's Name</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Pet's Name"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Owner's Name</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Owner's Name"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Date</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Time</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;