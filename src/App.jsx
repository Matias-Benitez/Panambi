import './App.css'
import {NavBar} from "./components/navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate, Route, Routes} from "react-router-dom";
import { Inicio, Consultorias, Nosotros, Talleres, Contacto } from "./pages/";

function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/nosotros" element={<Nosotros/>}></Route>
                <Route path="/consultoria" element={<Consultorias/>}></Route>
                <Route path="/talleres" element={<Talleres/>}></Route>
                <Route path="/contacto" element={<Contacto/>}></Route>
                <Route path="*" element={<Navigate to="/"/>}></Route>
            </Routes>
        </>
    )
}

export default App
