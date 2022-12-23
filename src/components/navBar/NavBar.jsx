import './navBar.css';
import { NavItems } from "./NavItems.jsx";

export const NavBar = () => {
    return (
        <header className="container-header">
            <div>
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
