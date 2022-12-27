import {FormContainer} from "../../components/forms/FormContainer.jsx";
import {Button} from "../../components/button/Button.jsx";
import './consultoria.css'

export const Consultorias = () => {
    return (
        <section>
            <div className="consultoria">
                <div className="container container-consultoria">
                    <h2 className="consultoria-titulo line-consultoria">Consultorías</h2>
                    <h3 className="consultoria-subtitulo">Asesoramiento y acompañamiento profesional en el desarrollo de tu negocio.</h3>
                </div>
                <div className="container container-consultoria">
                    <div className="row">
                        <div className="col-3">
                            <ul className="links-consultoria">
                                <li className="">Consultoría integral de gestión y administración</li>
                                <li className="">Consultoría de RSE</li>
                                <li className="">Consultoría ambiental</li>
                                <li className="">Consultoría de Marketing digital</li>
                                <li className="">Consultoría de RRHH</li>
                            </ul>
                        </div>
                        <div className="col-9">
                            <h3 className="consultoria-subtitulo">Consultoría integral de gestión y administración</h3>
                            <ul className="lista-consultoria">
                                <li>Diagnóstico integral de empresas</li>
                                <li>Confección e implementación de planes de acción</li>
                                <li>Desarrollo de herramientas de medición, control y rendimiento de resultados</li>
                                <li>Generación de procedimientos</li>
                                <li>Auditorías y seguimiento</li>
                                <li>Capacitación de colaboradores</li>
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
