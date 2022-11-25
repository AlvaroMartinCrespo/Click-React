import cocacolaLogo from '../img/img.png';
import '../stylesheet/page.css';
import Boton from './Boton.jsx';
import Contador from './Contador.jsx';
//Importamos el useState para actualizar el estado del contador
import { useState } from 'react';

//Creamos una page.jsx para separalo todo por componente y exportar
//solo un componente a App.js
function Page() {
    const code1 = '<';
    const code2 = ' />';
    const name = 'AMC';
    /**
     * Creamos una array donde almacenamos el num de clics y una funcion
     * que va a aumentar los clics en uno o va a reinicar el
     * contador a 0, mediante el useState.
     */
    const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
        setNumClics(numClics + 1);
    };
    const reiniciarContador = () => {
        setNumClics(0);
    };

    return (
        <div className="containerPrincipal">
            <div className="contenedor">
                <p>
                    <span className="blueSpan">{code1}</span>
                    <span>{name}</span>
                    <span className="greenSpan">{code2}</span>
                </p>
                {/* <img
                    className="cocacola-logo"
                    src={cocacolaLogo}
                    alt="logo-cocacola"
                /> */}
            </div>
            <div className="contenedorAplicacion">
                <Contador numClics={numClics} />
                <Boton
                    texto="Clic"
                    esBotonDeClic={true}
                    manejarClic={manejarClic}
                />

                <Boton
                    texto="Reiniciar"
                    esBotonDeClic={false}
                    manejarClic={reiniciarContador}
                />
            </div>
        </div>
    );
}

export default Page;
