import './redes-contacto.css';
import Ubicacion from '../../../assets/Ubicación.png'
import Email from '../../../assets/Mail.png'
import Telefono from '../../../assets/Teléfono.png'
import Linkedin from '../../../assets/LinkedIn.png'
import Instagram from '../../../assets/instagram 1.png'
import WhatsApp from '../../../assets/LogoWP.png'

export const RedesContacto = () => {
    return (
        <div className="redes-contacto-container">
            <div className="logos">
                <img src={Ubicacion} alt="Contacto"/>
                <p>Argentina</p>
            </div>
            <div className="logos">
                <img src={Email} alt="Mail"/>
                <p>panambiconsultoria@gmail.com</p>
            </div>
            <div className="logos">
                <img src={Telefono} alt="Telefono"/>
                <p>+549 2216126831</p>
            </div>
            <div><p><span>Encontranos</span>
                <span>en las redes!</span></p>
            </div>
            <div className="redes-sociales">
                <a target="_blank" href="https://www.linkedin.com/in/panambi-consultor%C3%ADa-de-empresas/"><img src={Linkedin} alt="Linkedin"/></a>
                <a target="_blank" href="https://www.instagram.com/panambi.consultoriasustentable/"><img src={Instagram} alt="Instagram"/></a>
                <a target="_blank"  href="https://wa.link/m7r6zx"><img src={WhatsApp} alt="WhatsApp"/></a>
            </div>
        </div>
    )
}
