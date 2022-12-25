import {FormContacto} from "./FormContacto";
import {FormTitle} from "./FormTitle.jsx";
import {useForm} from "../../../hooks/useForm.js";

export const ContactoContainer = () => {
    const { onInputChange, formState } = useForm();
    const { nombre, email, descripcion } = formState;

    return (
        <>
            <section className="container-forms">
                <FormTitle/>
                <FormContacto onInputChange={onInputChange}/>
            </section>
        </>
    )
}
