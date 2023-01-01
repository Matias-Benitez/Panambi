import {
    consultoriaAmbientalItems, consultoriaIntegralItems,
    consultoriaMarketingItems,
    consultoriaRecursosHumanosItems, consultoriaRSEItems
} from "../pages/consultorias/ConsultoriasItems.js";
import {useState} from "react";

export const useConsultorias = () => {
    const [consultoriaIntegral, setConsultoriaIntegral] = useState(true);
    const [consultoriaRSE, setConsultoriaRSE] = useState(false);
    const [consultoriaAmbiental, setConsultoriaAmbiental] = useState(false);
    const [consultoriaMarketing, setConsultoriaMarketing] = useState(false);
    const [consultoriaRecursosHumanos, setConsultoriaRecursosHumanos] = useState(false);

    let consultoriaIntegralStyle = consultoriaIntegral && 'animated-item';
    let consultoriaRSEStyle = consultoriaRSE && 'animated-item';
    let consultoriaAmbientalStyle = consultoriaAmbiental && 'animated-item';
    let consultoriaMarketingStyle = consultoriaMarketing && 'animated-item';
    let consultoriaRecursosHumanosStyle = consultoriaRecursosHumanos && 'animated-item';

    let consultoriaIntegralStyleMobile = consultoriaIntegral && 'mobile-consultoria-activate';
    let consultoriaRSEStyleMobile = consultoriaRSE && 'mobile-consultoria-activate';
    let consultoriaAmbientalStyleMobile = consultoriaAmbiental && 'mobile-consultoria-activate';
    let consultoriaMarketingStyleMobile = consultoriaMarketing && 'mobile-consultoria-activate';
    let consultoriaRecursosHumanosStyleMobile = consultoriaRecursosHumanos && 'mobile-consultoria-activate';

    let imageIntegralSelected = consultoriaIntegral ? 'src/assets/minus.png' : 'src/assets/más.png';
    let imageRSESSelected = consultoriaRSE ? 'src/assets/minus.png' : 'src/assets/más.png';
    let imageAmbientalSelected = consultoriaAmbiental ? 'src/assets/minus.png' : 'src/assets/más.png';
    let imageMarketingSelected = consultoriaMarketing ? 'src/assets/minus.png' : 'src/assets/más.png';
    let imageRR = consultoriaRecursosHumanos ? 'src/assets/minus.png' : 'src/assets/más.png';

    const consultoriaIntegralSelected = () => {
        !consultoriaIntegral && setConsultoriaIntegral(true);
        consultoriaRSE && setConsultoriaRSE(false);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        consultoriaMarketing && setConsultoriaMarketing(false);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }

    const consultoriaRSESelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        !consultoriaRSE && setConsultoriaRSE(true);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        consultoriaMarketing && setConsultoriaMarketing(false);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }


    const consultoriaAmbientalSelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        consultoriaRSE && setConsultoriaRSE(false);
        !consultoriaAmbiental && setConsultoriaAmbiental(true);
        consultoriaMarketing && setConsultoriaMarketing(false);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }

    const consultoriaMarketingSelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        consultoriaRSE && setConsultoriaRSE(false);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        !consultoriaMarketing && setConsultoriaMarketing(true);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }

    const consultoriaRecursosHumanosSelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        consultoriaRSE && setConsultoriaRSE(false);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        consultoriaMarketing && setConsultoriaMarketing(false);
        !consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(true);
    }

    const returnItems = () => {
        if(consultoriaIntegral){return consultoriaIntegralItems}
        if(consultoriaRSE){return consultoriaRSEItems}
        if(consultoriaAmbiental){return consultoriaAmbientalItems}
        if(consultoriaMarketing){return consultoriaMarketingItems}
        if(consultoriaRecursosHumanos){return consultoriaRecursosHumanosItems}
    }

    return {
        consultoriaIntegralSelected,
        consultoriaRSESelected,
        consultoriaAmbientalSelected,
        consultoriaMarketingSelected,
        consultoriaRecursosHumanosSelected,
        returnItems,
        consultoriaIntegralStyle,
        consultoriaRSEStyle,
        consultoriaAmbientalStyle,
        consultoriaMarketingStyle,
        consultoriaRecursosHumanosStyle,
        consultoriaIntegralStyleMobile,
        consultoriaRSEStyleMobile,
        consultoriaAmbientalStyleMobile,
        consultoriaMarketingStyleMobile,
        consultoriaRecursosHumanosStyleMobile,
        imageIntegralSelected,
        imageRSESSelected,
        imageAmbientalSelected,
        imageMarketingSelected,
        imageRR


    }
}


