import './form-contacto.css';

export const FormContacto = ({onInputChange}) => {
    return (
       <section>
           <form className="form-contacto-container">
               <div className="inputs-form">
                   <label htmlFor="nombre">NOMBRE</label>
                   <input onChange={onInputChange} id="nombre" name="nombre" placeholder="Tu nombre" type="text"/>
               </div>
               <div className="inputs-form">
                   <label htmlFor="email">CORREO ELECTRÓNICO</label>
                   <input onChange={onInputChange} id="email" name="email" placeholder="Tu correo electrónico" type="email"/>
               </div>
               <div className="inputs-form">
                   <label htmlFor="email">CONSULTA</label>
                   <textarea onChange={onInputChange} id="descripcion" name="descripcion" placeholder="Tu consulta" type="text"/>
               </div>
           </form>
           <div className="contacto-redes">

           </div>
       </section>
    )

}
