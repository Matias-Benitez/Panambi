import './navBar.css';
import { NavItems } from "./NavItems.jsx";

export const NavBar = () => {
    return (
        <header className="container-header">
            <div className="header-left">
                <img className="menu-hamburguesa" src="src/assets/menu-hamburguesa.png" alt="menu-hamburguesa"/>
                <img src="src/assets/Logo+horizontal-recortado.png" alt="Panambi Logo"/>
            </div>
            <div className="header-right">
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </header>
    );
};
