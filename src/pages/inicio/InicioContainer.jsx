
import {InicioLayout_1} from "./layout-1/InicioLayout_1.jsx";
import {InicioLayout_2} from "./layout-2/InicioLayout_2.jsx";
import {ContactoContainer} from "../../components/contacto/ContactoContainer";

export const InicioContainer = () => {
    return (
       <>
           <InicioLayout_1/>
           <InicioLayout_2/>
           <ContactoContainer/>
       </>
    )
}
