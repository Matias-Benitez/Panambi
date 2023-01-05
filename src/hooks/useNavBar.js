import {useState} from "react";
import { useNavigate } from "react-router-dom";

export const useNavBar = () => {
    const [ isActive, setIsActive ] = useState(false);
    const navigate = useNavigate();

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

    return {
        handleNavBar,
        animationNav,
        handleNavigate

    }

}
