import './App.css'
import {NavBar} from "./components/navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate, Route, Routes} from "react-router-dom";
import { InicioContainer, Consultorias, Nosotros, Talleres } from "./pages/";
import {Footer} from "./components/footer/Footer";

function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<InicioContainer/>}></Route>
                <Route path="/nosotros" element={<Nosotros/>}></Route>
                <Route path="/consultoria" element={<Consultorias/>}></Route>
                <Route path="/capacitaciones" element={<Talleres/>}></Route>
                <Route path="*" element={<Navigate to="/"/>}></Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
