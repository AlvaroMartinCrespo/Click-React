import React from 'react';
import '../stylesheet/contador.css';

/**
 * Los props se pueden dividir en los parametros directamente
 * y no hace falta usar props.{parametro}  
 */
function Contador({ numClics }) {
    return <div className="contador">
        {numClics}
        </div>;
}

export default Contador;
