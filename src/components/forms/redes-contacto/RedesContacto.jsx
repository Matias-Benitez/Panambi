import './redes-contacto.css';

export const RedesContacto = () => {
    return (
        <div className="redes-contacto-container">
            <div className="logos">
                <img src="src/assets/Ubicación.png" alt="Contacto"/>
                <p>Argentina</p>
            </div>
            <div className="logos">
                <img src="src/assets/Mail.png" alt="Mail"/>
                <p>panambiconsultoria@gmail.com</p>
            </div>
            <div className="logos">
                <img src="src/assets/Teléfono.png" alt="Telefono"/>
                <p>+549 2216126831</p>
            </div>
            <div><p><span>Encontrarnos</span>
                <span>en las redes!</span></p>
            </div>
            <div className="redes-sociales">
                <a target="_blank" href="https://www.linkedin.com/in/panambi-consultor%C3%ADa-de-empresas/"><img src="src/assets/LinkedIn.png" alt="Linkedin"/></a>
                <a target="_blank" href="https://www.instagram.com/panambi.consultoriasustentable/"><img src="src/assets/instagram 1.png" alt="Instagram"/></a>
                <a target="_blank"  href="https://wa.link/m7r6zx"><img src="src/assets/LogoWP.png" alt="WhatsApp"/></a>
            </div>
        </div>
    )
}
