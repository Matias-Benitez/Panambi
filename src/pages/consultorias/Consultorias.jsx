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
                        <div className="col-lg-4">
                            <ul className="links-consultoria">
                                <div className="mobile-config-consultorias">
                                    <li className="border-completo" id={consultoriaIntegralStyle} onClick={consultoriaIntegralSelected}>Consultoría integral de gestión y administración
                                        <ImgDynamic image={imageIntegralSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaIntegralStyleMobile}/>
                                </div>

                                <div className="mobile-config-consultorias">
                                    <li className="mobile-dropdown border-incompleto" id={consultoriaRSEStyle} onClick={consultoriaRSESelected}>Consultoría de RSE
                                        <ImgDynamic image={imageRSESSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaRSEStyleMobile}/>
                                </div>
                                <div className="mobile-config-consultorias">
                                    <li className="mobile-dropdown border-incompleto" id={consultoriaAmbientalStyle} onClick={consultoriaAmbientalSelected}>Consultoría ambiental
                                        <ImgDynamic image={imageAmbientalSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaAmbientalStyleMobile}/>
                                </div>
                                <div className="mobile-config-consultorias">
                                    <li className="mobile-dropdown border-incompleto-1" id={consultoriaMarketingStyle} onClick={consultoriaMarketingSelected}>Consultoría de <span>Marketing digital</span>
                                        <ImgDynamic image={imageMarketingSelected}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaMarketingStyleMobile}/>

                                </div>
                                <div className="mobile-config-consultorias">
                                    <li  className="mobile-dropdown border-completo" id={consultoriaRecursosHumanosStyle} onClick={consultoriaRecursosHumanosSelected}>Consultoría de RRHH
                                        <ImgDynamic image={imageRR}/>
                                    </li>
                                    <ConsultoriasDynamicMobile items={returnItems()} animation={consultoriaRecursosHumanosStyleMobile}/>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-8 desktop">
                            <ConsultoriasDynamicDesktop items={returnItems()}/>
                            <Button/>
                        </div>
                    </div>
                </div>
                <div className="boton-md">
                        <a href="#contacto">
                            <button className='boton-mostrar'>
                                ¡Quiero Saber Más!
                            </button>
                        </a>
                </div>
            </div>
            <FormContainer/>   
        </section>
    )
}
