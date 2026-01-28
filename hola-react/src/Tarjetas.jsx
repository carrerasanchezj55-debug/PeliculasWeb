import Boton from "./boton.jsx"

function Tarjetas ({nombre, categoria, rating, foto}){

    const claseRating = rating < 3 ? "rating-bajo" : "rating-alto";
    
    return(
        
        <div className="containerCatalogo">
            <div className="containerImg">
                <img src={foto} alt="Imagen de la pelicula" />
            </div>
            <div className="cardInfo">
                <h3>{nombre} </h3>
            <p>{categoria}</p>
            <p className={claseRating}>
        ⭐ {rating}
            </p>
        

            <Boton />
            </div>
        </div>
    )
}

export default Tarjetas