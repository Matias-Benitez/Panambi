import {FormSuscripcion} from "./suscripcionForm/FormSuscripcion.jsx";
import {useState} from "react";
import './form-container.css'
import {FormContactoContainer} from "./contactoForm/FormContactoContainer.jsx";

export const FormContainer = () => {
    const [suscrito, setSuscrito] = useState(false)
    const suscribirse = (e, suscripcion) => {
        e.preventDefault();
        suscripcion && setSuscrito(true)
    }
    return (
        <div className="all-form-container">
            <FormSuscripcion suscrito={suscrito} suscribirse={suscribirse}/>
            <FormContactoContainer/>
        </div>

    )
}
