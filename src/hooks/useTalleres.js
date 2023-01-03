import {
    tallerCanvasItems, tallerExcelItems,
    tallerAmbientalItems, tallerCambioClimaticoItems
} from "../pages/talleres/TalleresItems.js";
import {useState} from "react";
import imageMas from '../assets/más.png';
import imageMenos from '../assets/minus.png';



export const useTalleres = () => {
    const state = window.innerWidth > 992 ? true : false
    const [tallerCanvas, settallerCanvas] = useState(state);
    const [tallerExcel, settallerExcel] = useState(state);
    const [tallerAmbiental, settallerAmbiental] = useState(state);
    const [tallerCambioClimatico, settallerCambioClimatico] = useState(state);

    let tallerCanvasStyle = tallerCanvas ? 'animated-item' : '';
    let tallerExcelStyle = tallerExcel ? 'animated-item' : '';
    let tallerAmbientalStyle = tallerAmbiental ? 'animated-item' : '';
    let tallerCambioClimaticoStyle = tallerCambioClimatico ? 'animated-item' : '';

    let tallerCanvasStyleMobile = tallerCanvas && 'mobile-talleres-activate';
    let tallerExcelStyleMobile = tallerExcel && 'mobile-talleres-activate';
    let tallerAmbientalStyleMobile = tallerAmbiental && 'mobile-talleres-activate';
    let tallerCambioClimaticoStyleMobile = tallerCambioClimatico && 'mobile-talleres-activate';

    let imageTallerCanvas = tallerCanvas ? imageMenos : imageMas;
    let imageTallerExcel = tallerExcel ? imageMenos : imageMas;
    let imageTallerAmbiental = tallerAmbiental ? imageMenos : imageMas;
    let imageMTallerCambioClimatico = tallerCambioClimatico ? imageMenos : imageMas;

    const tallerCanvasSelected = () => {
        settallerCanvas(!tallerCanvas);
        tallerExcel && settallerExcel(false);
        tallerAmbiental && settallerAmbiental(false);
        tallerCambioClimatico && settallerCambioClimatico(false);
    }

    const tallerExcelSelected = () => {
        tallerCanvas && settallerCanvas(false);
        settallerExcel(!tallerExcel);
        tallerAmbiental && settallerAmbiental(false);
        tallerCambioClimatico && settallerCambioClimatico(false);
    }

    const tallerAmbientalSelected = () => {
        tallerExcel && settallerExcel(false);
        tallerCanvas && settallerCanvas(false);
        settallerAmbiental(!tallerAmbiental);
        tallerCambioClimatico && settallerCambioClimatico(false);
    }

    const tallerCambioClimaticoSelected = () => {
        tallerExcel && settallerExcel(false);
        tallerCanvas && settallerCanvas(false);
        tallerAmbiental && settallerAmbiental(false);
        settallerCambioClimatico(!tallerCambioClimatico);
    }

    const returnItems = () => {
        if(tallerCanvas){return tallerCanvasItems}
        if(tallerExcel){return tallerExcelItems}
        if(tallerAmbiental){return tallerAmbientalItems}
        if(tallerCambioClimatico){return tallerCambioClimaticoItems}
    }

    return {
        tallerCanvasSelected,
        tallerExcelSelected,
        tallerAmbientalSelected,
        tallerCambioClimaticoSelected,
        returnItems,
        tallerCanvasStyle,
        tallerExcelStyle,
        tallerAmbientalStyle,
        tallerCambioClimaticoStyle,
        tallerCanvasStyleMobile,
        tallerExcelStyleMobile,
        tallerAmbientalStyleMobile,
        tallerCambioClimaticoStyleMobile,
        imageTallerCanvas,
        imageTallerExcel,
        imageTallerAmbiental,
        imageMTallerCambioClimatico
    }
}


