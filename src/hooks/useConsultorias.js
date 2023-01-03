import {
    consultoriaAmbientalItems, consultoriaIntegralItems,
    consultoriaMarketingItems,
    consultoriaRecursosHumanosItems, consultoriaRSEItems
} from "../pages/consultorias/ConsultoriasItems.js";
import {useState} from "react";
import imageMas from '../assets/más.png';
import imageMenos from '../assets/minus.png';

export const useConsultorias = () => {
    const [consultoriaIntegral, setConsultoriaIntegral] = useState(true);
    const [consultoriaRSE, setConsultoriaRSE] = useState(false);
    const [consultoriaAmbiental, setConsultoriaAmbiental] = useState(false);
    const [consultoriaMarketing, setConsultoriaMarketing] = useState(false);
    const [consultoriaRecursosHumanos, setConsultoriaRecursosHumanos] = useState(false);

    let consultoriaIntegralStyle = consultoriaIntegral ? 'animated-item' : '';
    let consultoriaRSEStyle = consultoriaRSE ? 'animated-item' : '';
    let consultoriaAmbientalStyle = consultoriaAmbiental ? 'animated-item' : '';
    let consultoriaMarketingStyle = consultoriaMarketing ? 'animated-item' : '';
    let consultoriaRecursosHumanosStyle = consultoriaRecursosHumanos ? 'animated-item' : '';

    let consultoriaIntegralStyleMobile = consultoriaIntegral && 'mobile-consultoria-activate';
    let consultoriaRSEStyleMobile = consultoriaRSE && 'mobile-consultoria-activate';
    let consultoriaAmbientalStyleMobile = consultoriaAmbiental && 'mobile-consultoria-activate';
    let consultoriaMarketingStyleMobile = consultoriaMarketing && 'mobile-consultoria-activate';
    let consultoriaRecursosHumanosStyleMobile = consultoriaRecursosHumanos && 'mobile-consultoria-activate';

    let imageIntegralSelected = consultoriaIntegral ? imageMenos : imageMas;
    let imageRSESSelected = consultoriaRSE ? imageMenos : imageMas;
    let imageAmbientalSelected = consultoriaAmbiental ? imageMenos : imageMas;
    let imageMarketingSelected = consultoriaMarketing ? imageMenos : imageMas;
    let imageRR = consultoriaRecursosHumanos ? imageMenos : imageMas;

    const consultoriaIntegralSelected = () => {
        setConsultoriaIntegral(!consultoriaIntegral);
        consultoriaRSE && setConsultoriaRSE(false);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        consultoriaMarketing && setConsultoriaMarketing(false);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }

    const consultoriaRSESelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        setConsultoriaRSE(!consultoriaRSE);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        consultoriaMarketing && setConsultoriaMarketing(false);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }


    const consultoriaAmbientalSelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        consultoriaRSE && setConsultoriaRSE(false);
        setConsultoriaAmbiental(!consultoriaAmbiental);
        consultoriaMarketing && setConsultoriaMarketing(false);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }

    const consultoriaMarketingSelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        consultoriaRSE && setConsultoriaRSE(false);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        setConsultoriaMarketing(!consultoriaMarketing);
        consultoriaRecursosHumanos && setConsultoriaRecursosHumanos(false);
    }

    const consultoriaRecursosHumanosSelected = () => {
        consultoriaIntegral && setConsultoriaIntegral(false);
        consultoriaRSE && setConsultoriaRSE(false);
        consultoriaAmbiental && setConsultoriaAmbiental(false);
        consultoriaMarketing && setConsultoriaMarketing(false);
        setConsultoriaRecursosHumanos(!consultoriaRecursosHumanos);
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


