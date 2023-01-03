import './card-service.css'
import {Link} from "react-router-dom";

export const CardService = ({imagenUrl, titulo, descripcion, navigatePath}) => {


    return (
        <div className="servicios-card-container">
            <Link to={navigatePath}><div className="servicios-card-subcontainer">
                <div className="servicios-card-logo">
                    <img src={imagenUrl} alt="card-logo"/>
                </div>
                <div className="descripcion-container-servicios">
                    <div className="servicios-card-titulo">
                        <h2>{titulo}</h2>
                    </div>
                    <div className="servicios-card-descripcion">
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div></Link>
        </div>
    )

}
