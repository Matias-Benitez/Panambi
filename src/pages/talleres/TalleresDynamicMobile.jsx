export const TalleresDynamicMobile = ({items, animation}) => {
    return (
        <>
            <div className={`mobile-consultoria`}>
                {items.map((el, i) => {
                    console.log(el, i)
                    return (
                        i > 0 && i < 2 ? <p className={`${animation}`} key={i}>{el.item}</p> : <p className={`${animation}2`} key={i}>{el.item}</p>
                    )
                })}
            </div>
        </>
    )
}
