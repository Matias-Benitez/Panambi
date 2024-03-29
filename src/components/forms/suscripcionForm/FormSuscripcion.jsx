import {useForm} from "../../../hooks/useForm.js";
import './form-suscripcion.css';

export const FormSuscripcion = ({suscrito, suscribirse}) => {
    const {onInputChange, formState } = useForm();
    const { suscripcion } = formState;

    return (
        <section className="suscripcion-container">
            <div className="suscripcion-subcontainer">
                <h3>Ingresá tu email y enterate de todas las novedades. <span>¡Estemos en contacto!</span></h3>
                <form className="form-suscripcion" onSubmit={(e) => suscribirse(e, suscripcion)}>
                    <label htmlFor="suscripcion"></label>
                    <input onChange={onInputChange} name="suscripcion" type="email" id="suscripcion"
                           placeholder="Correo electrónico"/>
                    <button type="submit">SUSCRIBIRME</button>
                </form>
                {suscrito && <p>¡Tu suscripción se ha realizado con éxito!</p>}
            </div>
        </section>
    )
}
