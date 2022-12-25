import './layout_2.css'
import {CardService} from "./Card-Service";

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
                <CardService imagenUrl={'src/assets/consultoría.png'} titulo={'Consultorías'} descripcion={'Gestioná eficientemente tu empresa'}/>
                <CardService imagenUrl={'src/assets/taller.png'} titulo={'Capacitaciones'} descripcion={'Adquirí herramientas para impulsar tu negocio'}/>
            </div>
        </section>
    )
}
