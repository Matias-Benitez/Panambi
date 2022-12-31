import {FormContacto} from "./FormContacto";
import {FormTitle} from "./FormTitle.jsx";
import {useForm} from "../../../hooks/useForm.js";
import {RedesContacto} from "../redes-contacto/RedesContacto.jsx";
import {UneteAlEquipo} from "../unete-al-equipo/UneteAlEquipo";

export const FormContactoContainer = () => {
    const {onInputChange, formState} = useForm();
    const { nombre, email, descripcion } = formState;

    return (
        <>
            <section className="container-forms">3
                <FormTitle/>
                <div className="form-contacto">
                    <FormContacto onInputChange={onInputChange}/>
                    <RedesContacto/>
                </div>
                <UneteAlEquipo/>
            </section>
        </>
    )
}
