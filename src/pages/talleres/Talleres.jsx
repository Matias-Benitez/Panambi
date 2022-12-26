import {FormContainer} from "../../components/forms/FormContainer.jsx";
import {Button} from "../../components/button/Button.jsx";
import './talleres.css'

export const Talleres = () => {
    return (
        <section>
            <div className="taller">
                <div className="container container-taller">
                    <h2 className="taller-titulo line-taller">Capacitaciones</h2>
                    <h3 className="taller-subtitulo">Brindamos talleres y capacitaciones para Pymes, emprendedores, instituciones y todos aquellos interesados en adquirir herramientas que permitan incorporar mejoras en  sus procesos, modelos de negocios, e interiorizarse en materia de responsabilidad social y educación ambiental.</h3>
                </div>
                <div className="container container-taller">
                    <div className="row">
                        <div className="col-3">
                            <ul className="links-taller">
                                <a href=""><li className="">Modelo de negocios CANVAS</li></a>
                                <a href=""><li className="">Excel para principiantes</li></a>
                                <a href=""><li className="">Formación ambiental para Agentes Municipales</li></a>
                                <a href=""><li className="">Introducción al Cambio Climático</li></a>
                            </ul>
                        </div>
                        <div className="col-9">
                            <h3 className="taller-subtitulo">Taller: Modelo de negocios CANVAS.</h3>
                            <ul className="lista-taller">
                                <li><i class="fa-solid fa-check"></i><span>OBJETIVO:</span> Revisar los conceptos para identificar los aspectos claves de un negocio, la propuesta de valor, comprender quienes son sus clientes, competidores, y demás aspectos para observarlos de una manera clara y simple que contribuya a la toma de decisiones en búsqueda de alcanzar el éxito.</li>
                                <li><i class="fa-solid fa-list"></i><span>REQUISITOS:</span> No se requieren conocimientos previos. Este taller está orientado a todos aquellos que estén iniciando sus primeros emprendimientos, o a quienes ya se hayan animado a emprender y necesiten redefinir su modelo de negocio.</li>
                                <li><i class="fa-solid fa-hourglass-start"></i><span>DURACIÓN:</span> 2 horas.</li>
                                <li><i class="fa-solid fa-display"></i><span>MODALIDAD:</span> Virtual y/o presencial.</li>
                            </ul>
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>
            <FormContainer />
        </section>
    )
}