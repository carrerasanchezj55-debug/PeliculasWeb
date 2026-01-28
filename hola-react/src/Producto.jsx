function Producto ({nombre, precio, categoria}){

    return(
        <div>
            <h3>Producto: {nombre} </h3>
            <p>Precio: {precio}</p>
            <p>Categoria: {categoria}</p>

            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Producto