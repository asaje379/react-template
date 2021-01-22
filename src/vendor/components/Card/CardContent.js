import React from 'react'

export default function CardContent({
    img = null,
    imgHeight = '',
    children
}) {
    return (
        <div>
            {img ? <img src={img} alt="CARD-IMG" height={imgHeight} className="card-img" /> : null}
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}
