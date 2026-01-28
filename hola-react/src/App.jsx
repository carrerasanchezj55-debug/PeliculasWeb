
import Tarjetas from "./Tarjetas.jsx"
import lafamdelfuturo from "./lafamdelfuturo.jpg"
import harrypotter from "./harrypotter.jpg"
import losjuegosdelhambre from "./losjuegosdelhambre.jpg"

function App(){
  
  
  const catalogo = [
    {id:1, nombre:"Los juegos del Hambre", categoria:"Ciencia Ficcion", rating:2 , imagen:losjuegosdelhambre},
    {id:2, nombre:"Harry Potter", categoria:"Fantasia", rating: 4, imagen:harrypotter},
    {id:3, nombre:"La Familia del Futuro", categoria:"Animada", rating:5, imagen:lafamdelfuturo}
    
  ]

  return(

    <div className="mainContainer">

      
      <h1>
        Lista de peliculas
      </h1>
        
        <div className="catalogo">
          {catalogo.map((pr) =>(
            <Tarjetas
              key= {pr.id}
              nombre = {pr.nombre}
              categoria = {pr.categoria}
              rating = {pr.rating}
              foto = {pr.imagen}
              
            />      
        ))  
        
      }
        </div>
    </div>

  )

}

export default App