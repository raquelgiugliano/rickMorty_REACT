import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Inicio} from "../components/Inicio";
import {Personaje} from "../components/Personaje";

export function MyRoutes()
{
    return(<Router>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/personaje/:id" element={<Personaje/>}/>
        </Routes>
    </Router>)
}