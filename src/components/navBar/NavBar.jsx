import './navBar.css';
import { NavItems } from "./NavItems.jsx";
import { useNavBar } from "../../hooks/useNavBar.js";
import NavBarLogo from '../../assets/Logo+horizontal-recortado.png'
import MenuHamburguesa from '../../assets/menu-hamburguesa.png';

export const NavBar = () => {

    const { animationNav, handleNavBar, handleNavigate } = useNavBar();

    return (
        <header className="container-header">
            <div className="header-left">
                <img onClick={handleNavBar} id="menu-hamburguesa" src={MenuHamburguesa} alt="menu-hamburguesa"/>
                <img onClick={handleNavigate} className="logo-navbar" src={NavBarLogo} alt="Panambi Logo"/>
            </div>
            <div className="header-right">
                <nav className={animationNav}>
                    <NavItems handleNavBar={handleNavBar}/>
                </nav>
            </div>
        </header>
    );
};
