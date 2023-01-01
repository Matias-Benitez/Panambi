import {FormContainer} from "../../components/forms/FormContainer.jsx";
import {Button} from "../../components/button/Button.jsx";
import './consultoria.css'
import {ConsultoriasDynamicDesktop} from "./ConsultoriasDynamicDesktop.jsx";
import {useConsultorias} from '../../hooks/useConsultorias.js';
import {ImgDynamic} from "../../components/imgDymanic/ImgDynamic.jsx";
import {ConsultoriasDynamicMobile} from "./ConsultoriasDynamicMobile.jsx";

export const Consultorias = () => {
    const {
        consultoriaIntegralSelected,
        consultoriaRSESelected,
        consultoriaAmbientalSelected,
        consultoriaMarketingSelected,
        consultoriaRecursosHumanosSelected,
        returnItems,
        consultoriaIntegralStyle,
        consultoriaAmbientalStyle,
        consultoriaMarketingStyle,
        consultoriaRecursosHumanosStyle,
        consultoriaRSEStyle,
        consultoriaIntegralStyleMobile,
        consultoriaRSEStyleMobile,
        consultoriaRecursosHumanosStyleMobile,
        consultoriaAmbientalStyleMobile,
        consultoriaMarketingStyleMobile,
        imageAmbientalSelected,
        imageIntegralSelected,
        imageMarketingSelected,
        imageRR,
        imageRSESSelected,

    } = useConsultorias()

    return (
        <section>
            <div className="consultoria">
                <div className="container container-consultoria">
                    <div className="div-line"> <h2 className="consultoria-titulo line-consultoria">Consultorías</h2></div>
                    <h3 className="consultoria-subtitulo">Ofrecemos asesoramiento y acompañamiento profesional en el desarrollo de tu negocio.</h3>
                </div>
                <div className="container container-consultoria">
                    <div className="row">
                        <div className="col-xxl-4">
                            <ul className="links-consultoria">
                                <div className="mobile-config-consultorias">
                                    <li id={consultoriaIntegralStyle} onClick={consultoriaIntegralSelected}>Consultoría integral de gestión y administración
                                        <ImgDynamic image={imageIntegralSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaIntegralStyleMobile}/>
                                </div>

                                <div className="mobile-config-consultorias">
                                    <li className="mobile-dropdown" id={consultoriaRSEStyle} onClick={consultoriaRSESelected}>Consultoría de RSE
                                        <ImgDynamic image={imageRSESSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaRSEStyleMobile}/>
                                </div>
                                <div className="mobile-config-consultorias">
                                    <li className="mobile-dropdown" id={consultoriaAmbientalStyle} onClick={consultoriaAmbientalSelected}>Consultoría ambiental
                                        <ImgDynamic image={imageAmbientalSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaAmbientalStyleMobile}/>
                                </div>
                                <div className="mobile-config-consultorias">
                                    <li className="mobile-dropdown" id={consultoriaMarketingStyle} onClick={consultoriaMarketingSelected}>Consultoría de <span>Marketing digital</span>
                                        <ImgDynamic image={imageMarketingSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaMarketingStyleMobile}/>

                                </div>
                                <div className="mobile-config-consultorias">
                                    <li className="mobile-dropdown" id={consultoriaRecursosHumanosStyle} onClick={consultoriaRecursosHumanosSelected}>Consultoría de RRHH
                                        <ImgDynamic image={imageRR}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaRecursosHumanosStyleMobile}/>
                                </div>
                            </ul>
                        </div>
                        <div className="col-xxl-8 desktop">
                            <ConsultoriasDynamicDesktop items={returnItems()}/>
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>
            <FormContainer/>
        </section>
    )
}
