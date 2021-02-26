import React from 'react'
import Title from '../Typography/Title';

export default function CardHeader({
    color = null,
    rule = false,
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
