import { Link } from "react-router-dom";
import './navBar.css';


export const NavBar = () => {
    return (
        <div className="container-header">
            <div className="header-left">
                <img src="src/assets/Logo horizontal.png" alt="Panambi Logo"/>
            </div>
            <div className="header-right">
                <nav className="w-100">
                    <ul>
                        <li><Link to="#">INICIO</Link></li>
                        <li><Link to="#">NOSOTROS</Link></li>
                        <li><Link to="#">CONSULTORÍAS</Link></li>
                        <li><Link to="#">TALLERES</Link></li>
                        <li><Link to="#">CONTACTO</Link></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    );
};
