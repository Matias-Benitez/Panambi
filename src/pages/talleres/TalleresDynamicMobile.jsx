import './talleres.css'

export const TalleresDynamicMobile = ({items, animation}) => {
    return (
        <>
            <div className={`mobile-talleres ${animation}`}>
                {items && items.map((el, i) => {
                    return (
                        i > 0 && <p key={i}><span className="fw-bold">{el.title}</span> {el.item}</p>
                    )
                })}
            </div>
        </>
    )
}
