import {NavLink} from "react-router-dom";

export const NavItems = ({handleNavBar}) => {

    return (
        <ul>
            <li id="cerrar-navbar"><img onClick={handleNavBar} src="src/assets/cruz.png" alt="Cerrar"/></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink to='/'>INICIO</NavLink></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink className="line-active" to='/nosotros'>NOSOTROS</NavLink></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink className="line-active" to='/consultoria'>CONSULTORÍAS</NavLink></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink className="line-active" to='/talleres'>CAPACITACIONES</NavLink></li>
            <li onClick={handleNavBar}><span className="line-active" ></span><NavLink className="line-active" to='/contacto'>CONTACTO</NavLink></li>
        </ul>
    )
}
