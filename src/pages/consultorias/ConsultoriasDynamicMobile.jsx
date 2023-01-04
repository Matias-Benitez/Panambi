export const ConsultoriasDynamicMobile = ({items, animation}) => {
    return (
        <>
            <div className={`mobile-consultoria ${animation}`}>
            {items && items.map((el, i) => {
                return (
                    i > 0 && <p key={i}> - {el.item}</p>
                )
            })}
            </div>
        </>
    )
}
