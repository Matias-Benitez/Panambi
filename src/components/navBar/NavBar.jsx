import { NavLink } from "react-router-dom";
import { useNavAnimation } from "../../hooks";
import './navBar.css';


export const NavBar = () => {
    const { handleAnimation, lineNavBar } = useNavAnimation()
    return (
        <header className="container-header">
            <div className="header-left">
                <img src="src/assets/Logo horizontal.png" alt="Panambi Logo"/>
            </div>
            <div className="header-right">
                <nav>
                    <ul>
                        <li><span className="line-active"></span><NavLink to='/'>INICIO</NavLink></li>
                        <li><span className="line-active"></span><NavLink className="line-active" to='/nosotros'>NOSOTROS</NavLink></li>
                        <li><span className="line-active"></span><NavLink className="line-active" to='/consultoria'>CONSULTORÍAS</NavLink></li>
                        <li><span className="line-active"></span><NavLink className="line-active" to='/talleres'>TALLERES</NavLink></li>
                        <li><span className="line-active" ></span><NavLink className="line-active" to='/contacto'>CONTACTO</NavLink></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};
