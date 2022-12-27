export const ConsultoriasDynamic = ({items}) => {
    return (
        <>
            <h3 className="consultoria-subtitulo">{items[0].title}</h3>
            <ul className="lista-consultoria">
                {items.map((el, i) => {
                    return (
                        i > 0 &&  <li key={i}>{el.item}</li>
                    )
                })}
            </ul>
        </>
    )
}
