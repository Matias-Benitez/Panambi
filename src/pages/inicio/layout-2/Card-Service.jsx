import './card-service.css'

export const CardService = ({imagenUrl, titulo, descripcion}) => {
    return (
        <div className="servicios-card-container">
            <div className="servicios-card-subcontainer">
                <div className="servicios-card-logo">
                    <img src={imagenUrl} alt="card-logo"/>
                </div>
                <div className="servicios-card-titulo">
                    <h2>{titulo}</h2>
                </div>
                <div className="servicios-card-descripcion">
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
        )

}
