import { useState } from "react";

function Tarea(){

    const [total, setTotal] = useState(0)

    const [cantidad, setCantidad] = useState(0)

     const agregarServicio = () =>{
    setTotal(total + 1)
     }
    
    return(

        <div>
            <h1>
                Servicios
            </h1>

            <button onClick={()=> agregarServicio(50)}>Lavado</button>
            <button onClick={()=> agregarServicio(500)}>Planchado</button>
            <button onClick={()=> agregarServicio(200)}>Secado</button>
      <p>Haz realizado {total} ventas el dia de hoy</p>
        </div>
    )
}

export default Tarea