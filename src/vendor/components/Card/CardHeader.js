import React from 'react'

export default function CardHeader({
    color = null,
    children
}) {

    let css = 'card-header';
    if (color) {
        css += ' bg-' + color; 
    }

    return (
        <div className={css}>
            {children}
        </div>
    )
}
