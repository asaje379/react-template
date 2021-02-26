import React from 'react'

export default function CardContent({
    img = null,
    imgHeight = '',
    color = null,
    children
}) {

    let css = '';
    if (color) {
        css += ' bg-' + color;
    }

    return (
        <div className={css}>
            {img ? <img src={img} alt="CARD-IMG" height={imgHeight} className="card-img" /> : null}
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}
