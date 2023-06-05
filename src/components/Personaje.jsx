import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../functions/funciones";

export function Personaje() {
  const [personaje, setPersonaje] = useState(null);
  const params = useParams();

  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, []);

  return (
    <div>
      {personaje != null ? (
        <div>
          <h2>Personaje con el ID: {params.id}</h2>
          <h1>con el nombre: {personaje.name}</h1>
          <img src={personaje.image} />
        </div>
      ) : (
        "No hay personajes"
      )}
    </div>
  );
}
