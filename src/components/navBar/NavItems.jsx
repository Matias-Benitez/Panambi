import {NavLink} from "react-router-dom";
import Cruz from '../../assets/cruz.png';

export const NavItems = ({handleNavBar}) => {

    return (
        <ul>
            <li id="cerrar-navbar"><img onClick={handleNavBar} src={Cruz} alt="Cerrar"/></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink to='/'>INICIO</NavLink></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink className="line-active" to='/nosotros'>NOSOTROS</NavLink></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink className="line-active" to='/consultoria'>CONSULTORÍAS</NavLink></li>
            <li onClick={handleNavBar}><span className="line-active"></span><NavLink className="line-active" to='/capacitaciones'>CAPACITACIONES</NavLink></li>
            <li><a className="header-left line-active " onClick={handleNavBar} href="#contacto"><span className="line-active" >CONTACTO</span></a></li>
        </ul>
    )
}
