import {FormContainer} from "../../components/forms/FormContainer.jsx";
import {Button} from "../../components/button/Button.jsx";
import './consultoria.css'
import {ConsultoriasDynamic} from "./ConsultoriasDynamic.jsx";
import {useConsultorias} from '../../hooks/useConsultorias.js';

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
        consultoriaRSEStyle
    } = useConsultorias()

    return (
        <section>
            <div className="consultoria">
                <div className="container container-consultoria">
                    <h2 className="consultoria-titulo line-consultoria">Consultorías</h2>
                    <h3 className="consultoria-subtitulo">Asesoramiento y acompañamiento profesional en el desarrollo de
                        tu negocio.</h3>
                </div>
                <div className="container container-consultoria">
                    <div className="row">
                        <div className="col-3">
                            <ul className="links-consultoria">
                                <li id={consultoriaIntegralStyle} onClick={consultoriaIntegralSelected}>Consultoría
                                    integral de gestión y administración
                                </li>
                                <li id={consultoriaRSEStyle} onClick={consultoriaRSESelected}>Consultoría de RSE</li>
                                <li id={consultoriaAmbientalStyle} onClick={consultoriaAmbientalSelected}>Consultoría ambiental</li>
                                <li id={consultoriaMarketingStyle} onClick={consultoriaMarketingSelected}>Consultoría de Marketing digital</li>
                                <li id={consultoriaRecursosHumanosStyle} onClick={consultoriaRecursosHumanosSelected}>Consultoría de RRHH</li>
                            </ul>
                        </div>
                        <div className="col-9">
                            <ConsultoriasDynamic items={returnItems()}/>
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>
            <FormContainer/>
        </section>
    )
}
