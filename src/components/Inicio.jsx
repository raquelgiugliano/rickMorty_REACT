import { useState } from "react";
import { useEffect } from "react";
import { todosPersonajes } from "../functions/funciones";

export function Inicio() {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <div>
      {personajes != null
        ? personajes.map((personaje) => (
            <div key={personaje.id}>
              <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
              {/* <img src={personaje.image}/> */}
            </div>
          ))
        : "no hay personajes"}
    </div>
  );
}
