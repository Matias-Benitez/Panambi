import {NavLink} from "react-router-dom";
import Cruz from '../../assets/cruz.png';

export const NavItems = ({handleNavBar}) => {

    return (
          <ul>
              <li id="cerrar-navbar"><img onClick={handleNavBar} src={Cruz} alt="Cerrar"/></li>
              <li><span className="line-active"></span><NavLink onClick={handleNavBar} className="line-active" to='/'>INICIO</NavLink></li>
              <li><span className="line-active"></span><NavLink onClick={handleNavBar} className="line-active" to='/nosotros'><span >NOSOTROS</span></NavLink></li>
              <li><span className="line-active"></span><NavLink onClick={handleNavBar} className="line-active" to='/consultoria'>CONSULTORÍAS</NavLink></li>
              <li><span className="line-active"></span><NavLink onClick={handleNavBar} className="line-active" to='/capacitaciones'>CAPACITACIONES</NavLink></li>
              <li><a className="header-left line-active " onClick={handleNavBar} href="#contacto"><span className="line-active" >CONTACTO</span></a></li>
          </ul>
    )
}
