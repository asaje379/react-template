import React from 'react';

const Card = ({
    expand = true,
    color = null,
    padding = '0',
    margin = '0',
    onClick = () => {},
    children
}) => {

    let css = 'card ';
    if (!expand) css += 'w-auto ';
    if (color) css += 'bg-' + color; 

    return <div className={css} onClick={onClick} style={{
        padding, 
        margin,
        width: `calc(100% - ${margin} - ${margin})`
    }}>
        {children}
    </div>
};

export default Card;