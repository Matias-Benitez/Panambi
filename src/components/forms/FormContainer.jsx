import {FormSuscripcion} from "./suscripcionForm/FormSuscripcion.jsx";
import {useState} from "react";
import {ContactoContainer} from "./contactoForm/ContactoContainer.jsx";

export const FormContainer = () => {
    const [suscrito, setSuscrito] = useState(false)
    const suscribirse = (e, suscripcion) => {
        e.preventDefault();
        suscripcion && setSuscrito(true)
    }
    return (
        <>
            <FormSuscripcion suscrito={suscrito} suscribirse={suscribirse}/>
            <ContactoContainer/>
        </>
    )
}
