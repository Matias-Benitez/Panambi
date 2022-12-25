import {useForm} from "../../hooks/useForm.js";
import './form-suscripcion.css';

export const FormSuscripcion = () => {

    const {onInputChange, formState} = useForm();
    const {suscripcion} = formState;

    return (
        <section className="suscripcion-container">
            <div className="suscripcion-subcontainer">
                <h3>Suscribite a nuestra cartelera de anuncios ¡Enterate de todas las novedades!</h3>
                <form className="form-suscripcion">
                    <label htmlFor="suscripcion"></label>
                    <input onChange={onInputChange} name="suscripcion" type="email" id="suscripcion"
                           placeholder="Correo electrónico"/>
                    <button type="submit">SUSCRIBIRME</button>
                </form>
            </div>
        </section>
    )
}
