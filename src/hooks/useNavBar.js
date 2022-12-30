import {useState} from "react";

export const useNavBar = () => {
    const [ isActive, setIsActive ] = useState(false);

    const handleNavBar = () => {
        setIsActive(!isActive)
    }

    let animationNav = isActive ? 'activate' : ' ';

    return {
        handleNavBar,
        animationNav

    }

}
