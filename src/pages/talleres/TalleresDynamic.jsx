import './talleres.css'
export const TalleresDynamic = ({items}) => {
    return (
        <>
            <h3 className="taller-subtitulo">{items[0].title}</h3>
            <div className='grid row'>
                <div className='row col-1 text-center '>
                    <span className='icono'><i className="fa-solid fa-check"></i></span>
                    <span className='icono1'><i className="fa-solid fa-list"></i></span>
                    <span className='icono2'><i className="fa-solid fa-hourglass-start"></i></span>
                    <span className='icono3'><i className="fa-solid fa-display"></i></span>
                </div>
                <div className='row col-11 '>
                    <ul className="lista-taller">
                        {items.map((el, i) => {
                            return (
                                i > 0 &&  <li key={i}>{el.item}</li>
                            )
                        })}
                     </ul>
                </div>
            </div>
            
        </>
    )
}
