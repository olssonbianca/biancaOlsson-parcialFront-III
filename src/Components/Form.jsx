import { useState } from 'react';
import Casilla from './Casilla';
import "./styles.css"



const Form = () => {

//Declaracion de State

  const [values, setValues] = useState(
    { mascota: '', 
    raza: '' });

  const [error, setError] = useState(
    { mascota: '', 
    raza: '' });

  const [validacion, setValidacion] = useState(false);


//Eventos y validaciones

  const onInputMascotaChange = e => {
    const input = e.target.value;

    if (input.trim().length < 3) {
      setError({ mascota: 'Por favor chequea que la información sea correcta”' });
      return;
    }

    setError({ raza: '' });
    setValues({ ...values, mascota: input });
  };


  const onInputRazaChange = e => {
    const input = e.target.value;

    if (input.trim().length < 6) {
      setError({ raza: 'Por favor chequea que la información sea correcta'});
      return;
    }

    setError({ raza: '' });
    setValues({ ...values, raza: input });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if ( values.mascota && values.raza) {
      setValidacion(true);
    }
  };

  return (
    <>
      <form onSubmit={e => onFormSubmit(e, values)}>

        <Casilla
          forHtml="mascota"
          text="Nombre Mascota"
          type="text"
          name="mascota"
          onChange={onInputMascotaChange}
        />

        {error.mascota?.length > 0 && error.mascota}


        <Casilla
          forHtml="raza"
          text="Raza Mascota"
          type="text"
          name="raza"
          onChange={onInputRazaChange}
        />
        {error.raza?.length > 0 && <span className="text-red-500">{error.raza}</span>}


        <button
          type="submit"
          className="button">
          Enviar
        </button>
        
      </form>


      {validacion && (
        <div>
             <h2> Mi mascota se llama {values.mascota} </h2> 
            <h4>y es de raza {values.raza}</h4>
        </div>
      )}
    </>
  );
};

export default Form;