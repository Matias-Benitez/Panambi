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
                <CardService imagenUrl={imageConsultoria} titulo={'Consultorías'} descripcion={'Gestioná eficientemente tu empresa'}/>
                <CardService imagenUrl={imageTaller} titulo={'Capacitaciones'} descripcion={'Adquirí herramientas para impulsar tu negocio'}/>
            </div>
        </section>
    )
}
