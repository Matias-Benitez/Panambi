import {
    tallerCanvasItems, tallerExcelItems,
    tallerAmbientalItems, tallerCambioClimaticoItems
} from "../pages/talleres/TalleresItems.js";
import {useState} from "react";



export const useTalleres = () => {
    const [tallerCanvas, settallerCanvas] = useState(true);
    const [tallerExcel, settallerExcel] = useState(false);
    const [tallerAmbiental, settallerAmbiental] = useState(false);
    const [tallerCambioClimatico, settallerCambioClimatico] = useState(false);

    let tallerCanvasStyle = tallerCanvas ? 'animated-item' : '';
    let tallerExcelStyle = tallerExcel ? 'animated-item' : '';
    let tallerAmbientalStyle = tallerAmbiental ? 'animated-item' : '';
    let tallerCambioClimaticoStyle = tallerCambioClimatico ? 'animated-item' : '';

    let tallerCanvasStyleMobile = tallerCanvas && 'mobile-talleres-activate';
    let tallerExcelStyleMobile = tallerExcel && 'mobile-talleres-activate';
    let tallerAmbientalStyleMobile = tallerAmbiental && 'mobile-talleres-activate';
    let tallerCambioClimaticoStyleMobile = tallerCambioClimatico && 'mobile-talleres-activate';

    let imageTallerCanvas = tallerCanvas ? 'src/assets/minus.png' : 'src/assets/más.png';
    let imageTallerExcel = tallerExcel ? 'src/assets/minus.png' : 'src/assets/más.png';
    let imageTallerAmbiental = tallerAmbiental ? 'src/assets/minus.png' : 'src/assets/más.png';
    let imageMTallerCambioClimatico = tallerCambioClimatico ? 'src/assets/minus.png' : 'src/assets/más.png';

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


