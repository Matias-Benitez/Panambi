import {FormContainer} from "../../components/forms/FormContainer.jsx";
import {Button} from "../../components/button/Button.jsx";
import './talleres.css'
import {TalleresDynamic} from "./TalleresDynamic.jsx";
import {useTalleres} from '../../hooks/useTalleres.js';
import {ImgDynamic} from "../../components/imgDymanic/ImgDynamic.jsx";
import {TalleresDynamicMobile} from "./TalleresDynamicMobile";


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
        tallerCambioClimaticoStyle,
        imageMTallerCambioClimatico,
        imageTallerAmbiental,
        imageTallerCanvas,
        imageTallerExcel,
        tallerAmbientalStyleMobile,
        tallerCambioClimaticoStyleMobile,
        tallerCanvasStyleMobile,
        tallerExcelStyleMobile
    } = useTalleres()

    return (
        <section>
            <div className="taller">
                <div className="container container-taller">
                    <div className="div-line"><h2 className="taller-titulo line-taller">Capacitaciones</h2></div>
                    <h3 className="taller-subtitulo">Brindamos talleres y capacitaciones para Pymes, emprendedores, instituciones y todos aquellos interesados en adquirir herramientas que permitan incorporar mejoras en  sus procesos, modelos de negocios, e interiorizarse en materia de responsabilidad social y educación ambiental.</h3>
                </div>
                <div className="container container-taller">
                    <div className="row">
                        <div className="col-xxl-4">
                            <ul className="links-taller">
                                <div className="mobile-config-talleres">
                                  <li className="border-completo" id={tallerCanvasStyle} onClick={tallerCanvasSelected}>Modelo de negocios <span>CANVAS.</span>
                                      <ImgDynamic image={imageTallerCanvas}/>
                                  </li>
                                    <TalleresDynamicMobile items={returnItems()} animation={tallerCanvasStyleMobile}/>
                                </div>
                                <div className="mobile-config-talleres">
                                   <li className="border-incompleto" id={tallerExcelStyle} onClick={tallerExcelSelected}>Excel para principiantes
                                       <ImgDynamic image={imageTallerExcel}/>
                                   </li>
                                    <TalleresDynamicMobile items={returnItems()} animation={tallerExcelStyleMobile}/>
                                </div>
                                <div className="mobile-config-talleres">
                                   <li className="border-incompleto-1" id={tallerAmbientalStyle} onClick={tallerAmbientalSelected}>Formación ambiental para Agentes Municipales
                                       <ImgDynamic image={imageTallerAmbiental}/>
                                   </li>
                                    <TalleresDynamicMobile items={returnItems()} animation={tallerAmbientalStyleMobile}/>
                                </div>
                                <div className="mobile-config-talleres">
                                    <li className="border-completo" id={tallerCambioClimaticoStyle} onClick={tallerCambioClimaticoSelected}>Introducción al <span>Cambio Climático</span>
                                        <ImgDynamic image={imageMTallerCambioClimatico}/>
                                    </li>
                                    <TalleresDynamicMobile items={returnItems()} animation={tallerCambioClimaticoStyleMobile}/>
                                </div>
                            </ul>
                        </div>
                        <div className="col-8 desktop">
                            <TalleresDynamic items={returnItems()}/>
                        </div>
                        <div className="boton-taller"><Button/></div>
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
            <FormContainer />
        </section>
    )
}
