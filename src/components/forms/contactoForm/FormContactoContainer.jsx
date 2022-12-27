import {FormContacto} from "./FormContacto";
import {FormTitle} from "./FormTitle.jsx";
import {useForm} from "../../../hooks/useForm.js";
import {RedesContacto} from "../redes-contacto/RedesContacto.jsx";

export const FormContactoContainer = () => {
    const {onInputChange, formState} = useForm();
    const {nombre, email, descripcion} = formState;

    return (
        <>
            <section className="container-forms">
                <FormTitle/>
                <div className="d-flex">
                    <FormContacto onInputChange={onInputChange}/>
                    <RedesContacto/>
                </div>
            </section>
        </>
    )
}
