import {FormContainer} from "../../components/forms/FormContainer.jsx";
import Daniela from '../../../src/assets/Daniela.png'
import Federico from '../../../src/assets/Federico.png'
import './nosotros.css'

export const Nosotros = () => {
    return (
        <section>
            <div className="container container-nosotros">
                <h2 className="nosotros-titulo line-nosotros">Nosotros</h2>
                <p className="nosotros-parrafo">Somos un equipo interdisciplinario de profesionales orientado a la búsqueda de soluciones integrales y adaptadas a las necesidades de cada empresa. Nos especializamos en Pymes y emprendimientos, cuyo objetivo sea el de profesionalizar sus procesos y obtener una mayor eficiencia en búsqueda de un desarrollo sostenible, considerando el impacto ambiental y social de sus actividades.
                Con base en Argentina, trabajamos de manera remota (principalmente), lo que nos permite formar equipos de trabajo adaptados a cada proyecto.</p>
            </div>
            <div className="container container-nosotros">
                <div className="row align-items-center">
                    <div className="col-2">
                    <img src={Daniela} alt="Imágen Daniela Milén Juárez" />
                    </div>
                    <div className="col-9 nosotros-parrafo-descripcion">
                        <h3>Daniela Milén Júarez</h3>
                        <p className="nosotros-parrafo"><span>Fundadora: Licenciada en Administración de empresas</span></p>
                        <p className="nosotros-parrafo"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptatum aperiam repellendus omnis facilis quasi aliquid aut suscipit blanditiis, inventore eius eum, vel corporis. Tempora quas et ipsa tenetur, inventore eius eum, vel corporis. Tempora quas et ipsa tenetur magni!</p>
                    </div>
                </div>
            </div>
            <div className="container container-nosotros">
                <div className="row align-items-center">
                    <div className="col-9 nosotros-parrafo-descripcion">
                        <h3>Federico</h3>
                        <p className="nosotros-parrafo"><span>Fundadora: Licenciada en Administración de empresas</span></p>
                        <p className="nosotros-parrafo"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptatum aperiam repellendus omnis facilis quasi aliquid aut suscipit blanditiis, inventore eius eum, vel corporis. Tempora quas et ipsa tenetur, inventore eius eum, vel corporis. Tempora quas et ipsa tenetur magni!</p>
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
