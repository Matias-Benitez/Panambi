import {NavLink} from "react-router-dom";

export const NavItems = () => {
    return (
        <ul>
            <li><span className="line-active"></span><NavLink to='/'>INICIO</NavLink></li>
            <li><span className="line-active"></span><NavLink className="line-active" to='/nosotros'>NOSOTROS</NavLink></li>
            <li><span className="line-active"></span><NavLink className="line-active" to='/consultoria'>CONSULTORÍAS</NavLink></li>
            <li><span className="line-active"></span><NavLink className="line-active" to='/talleres'>TALLERES</NavLink></li>
            <li><span className="line-active" ></span><NavLink className="line-active" to='/contacto'>CONTACTO</NavLink></li>
        </ul>
    )
}
