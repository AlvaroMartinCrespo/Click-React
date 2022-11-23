import React from 'react';
import '../stylesheet/boton.css';

//Pasamos los props al componente
function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        //Operador ternaria para elegir boton ya que hay dos tipos de botones
        <button
            className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}
        >
            {texto}
        </button>
    );
}

export default Boton;
