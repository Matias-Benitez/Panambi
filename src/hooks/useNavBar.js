import {useState} from "react";
import { useNavigate } from "react-router-dom";

export const useNavBar = () => {
    const [ isActive, setIsActive ] = useState(false);
    const [ width, setWidth ] = useState(0);
    const navigate = useNavigate();

    window.addEventListener('resize', () => {
        let totalWidth = window.innerWidth;
        setWidth(totalWidth)
        if(width > 992) {
            document.body.style.overflow = "auto";
        } else if(isActive && width < 992) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "auto";
        }
    });

    const handleNavBar = () => {
        if(!isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "auto";
        }
        setIsActive(!isActive)
    }

    let animationNav = isActive ? 'activate' : ' ';

    const handleNavigate = () => {
        navigate('/')
    }

    const handleDocumentClick = (event, navRef) => {
        if (!event.target.closest('nav') && event.target !== navRef.current) {
            setIsActive(false)
        }
    }

    return {
        setIsActive,
        handleNavBar,
        animationNav,
        handleNavigate,
        handleDocumentClick
    }

}
