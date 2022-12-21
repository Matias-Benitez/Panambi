import { useState } from "react";

export const useNavAnimation = () => {
    const [ activateAnimation, setActivateAnimation ] = useState(false);

    const handleAnimation = () => {
        setActivateAnimation(!activateAnimation);
    };

    let lineNavBar = activateAnimation && 'line-activate'

    return {
        handleAnimation,
        lineNavBar
    }
}
