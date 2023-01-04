import './layout_2.css'
import {CardService} from "./Card-Service";
import imageConsultoria from '../../../assets/consultoría.png'
import imageTaller from '../../../assets/taller.png'

export const InicioLayout_2 = () => {
    return (
        <section className="container-inicio-layout-2">
            <div className="servicios">
                <div className="servicios-titulo">
                    <h2>SERVICIOS</h2>
                </div>
                <div className="servicios-parrafo">
                    <p>Si sos <span>emprendedor</span> o tenés una <span>pyme</span>, mirá los servicios que tenemos
                         <span id="line-parrafo"> para vos.</span></p>
                </div>
            </div>
            <div className="cardService-container">
                <CardService imagenUrl={imageConsultoria} titulo={'Consultorías'} descripcion={'Gestioná eficientemente tu empresa'} navigatePath={'/consultoria'}
                             animationDescription={'Ofrecemos distintos tipos de consultorías para ayudarte a gestionar tu empresa o emprendimiento adaptándonos a tus necesidades.'}
                />
                <CardService imagenUrl={imageTaller} titulo={'Capacitaciones'} descripcion={'Adquirí herramientas para impulsar tu negocio'} navigatePath={'/capacitaciones'}
                            animationDescription={'Brindamos talleres para que puedas aprender sobre distintas herramientas que te ayudarán a potenciar tu negocio.'}
                />
            </div>
        </section>
    )
}
