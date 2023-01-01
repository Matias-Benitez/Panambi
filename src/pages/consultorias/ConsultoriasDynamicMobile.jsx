export const ConsultoriasDynamicMobile = ({items, animation}) => {
    return (
        <>
            <div className={`mobile-consultoria`}>
            {items.map((el, i) => {
                return (
                    i > 0 && <p className={`${animation}`} key={i}>{el.item}</p>
                )
            })}
            </div>
        </>
    )
}
