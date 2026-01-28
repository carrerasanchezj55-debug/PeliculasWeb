import { useEffect, useState } from "react"

function Boton () {
    const estadoInicial = parseInt(localStorage.getItem("carrito" )|| 0 )
    const [contador, setContador] = useState(0);

    useEffect(()=> {
        localStorage.setItem("carrito", contador)
    }),[contador]

    const manejarClick = () => {
        setContador(contador + 1);
    };

    return (
        <div className="Boton">
            <button onClick={manejarClick}>
                Rentar película
            </button>

            <p>Rentada {contador} veces</p>
        </div>
    );
}

export default Boton;
