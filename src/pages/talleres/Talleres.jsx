import {FormContainer} from "../../components/forms/FormContainer.jsx";
import {Button} from "../../components/button/Button.jsx";
import './talleres.css'
import {TalleresDynamic} from "./TalleresDynamic.jsx";
import {useTalleres} from '../../hooks/useTalleres.js';


export const Talleres = () => {
    const {
        tallerCanvasSelected,
        tallerExcelSelected,
        tallerAmbientalSelected,
        tallerCambioClimaticoSelected,
        returnItems,
        tallerCanvasStyle,
        tallerExcelStyle,
        tallerAmbientalStyle,
        tallerCambioClimaticoStyle
    } = useTalleres()

    return (
        <section>
            <div className="taller">
                <div className="container container-taller">
                    <h2 className="taller-titulo line-taller">Capacitaciones</h2>
                    <h3 className="taller-subtitulo">Brindamos talleres y capacitaciones para Pymes, emprendedores, instituciones y todos aquellos interesados en adquirir herramientas que permitan incorporar mejoras en  sus procesos, modelos de negocios, e interiorizarse en materia de responsabilidad social y educación ambiental.</h3>
                </div>
                <div className="container container-taller">
                    <div className="row">
                        <div className="col-4">
                            <ul className="links-taller">
                                <li id={tallerCanvasStyle} onClick={tallerCanvasSelected}>Taller: Modelo de negocios CANVAS.</li>
                                <li id={tallerExcelStyle} onClick={tallerExcelSelected}>Excel para principiantes</li>
                                <li id={tallerAmbientalStyle} onClick={tallerAmbientalSelected}>Formación ambiental para Agentes Municipales</li>
                                <li id={tallerCambioClimaticoStyle} onClick={tallerCambioClimaticoSelected}>Introducción al Cambio Climático</li>
                            </ul>
                        </div>
                        <div className="col-8">
                            <TalleresDynamic items={returnItems()}/>
                        </div>
                        <div className="boton-taller"><Button/></div>
                    </div>
                </div>
            </div>
            <FormContainer />
        </section>
    )
}
