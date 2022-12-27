import {FormContainer} from "../../components/forms/FormContainer.jsx";
import Daniela from '../../../src/assets/Daniela.png'
import Federico from '../../../src/assets/Federico.png'
import Linkedin from '../../../src/assets/LinkedIn.png'
import './nosotros.css'

export const Nosotros = () => {
    return (
        <section>
            <div className="container container-nosotros">
                <h2 className="nosotros-titulo line-nosotros">Nosotros</h2>
                <p className="nosotros-parrafo">Somos un equipo interdisciplinario de profesionales orientado a la búsqueda de soluciones integrales y adaptadas a las necesidades de cada empresa. Nos especializamos en Pymes y emprendimientos, cuyo objetivo sea el de profesionalizar sus procesos y obtener una mayor eficiencia en búsqueda de un desarrollo sostenible, considerando el impacto ambiental y social de sus actividades. Con base en Argentina, trabajamos de manera remota (principalmente), lo que nos permite formar equipos de trabajo adaptados a cada proyecto.</p>
            </div>
            <div className="container container-nosotros">
                <div className="row align-items-center">
                    <div className="col-2">
                    <img src={Daniela} alt="Imágen Daniela Milén Juárez" />
                    </div>
                    <div className="col-9 nosotros-parrafo-descripcion">
                        <h3>Daniela Milén Júarez</h3>
                        <p className="nosotros-parrafo"><span>Fundadora: Licenciada en Administración de empresas</span></p>
                        <p className="nosotros-parrafo">Licenciada en Administración de empresas con larga experiencia tanto en empresas multinacionales como empresas regionales, interesada principalmente acompañar a Pymes y emprendimientos en la evolución de sus negocios de manera responsable. “Amante del planeta en que vivimos, deseo contribuir a generar negocios de impacto positivo.”</p>
                        <a href="https://www.linkedin.com/in/daniela-mil%C3%A9n-ju%C3%A1rez-767bb341/" target="_blank"><img className="nosotros-linkedin" src={Linkedin} alt="" /><span className="nosotros-linkedin-text">Visitar perfil de LinkedIn</span></a>
                    </div>
                </div>
            </div>
            <div className="container container-nosotros">
                <div className="row align-items-center">
                    <div className="col-9 nosotros-parrafo-descripcion">
                        <h3>Federico Ezequiel Parrilli</h3>
                        <p className="nosotros-parrafo"><span>Licenciado en Gestión Ambiental</span></p>
                        <p className="nosotros-parrafo"> Licenciado en Gestión Ambiental con experiencia en el sector público y privado. Investigador independiente y divulgador ambiental fundador del Proyecto Carnívoras Argentina. “La gestión ambiental ya no es un lujo, sino una necesidad para nuestro desarrollo.”</p>
                        <a href="https://www.linkedin.com/in/federico-ezequiel-parrilli-743577b3/" target="_blank"><img className="nosotros-linkedin" src={Linkedin} alt="" /><span className="nosotros-linkedin-text">Visitar perfil de LinkedIn</span></a>
                    </div>
                    <div className="col-2">
                    <img src={Federico} alt="Imágen Federico Milén Juárez" />
                    </div>
                </div>
            </div>
            <FormContainer />
        </section>
    )
}
