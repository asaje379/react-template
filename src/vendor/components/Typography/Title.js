import React from 'react';

const Title = ({
    type = 'h1',
    thin = false,
    veryThin = false,
    rule = null,
    margin = '10px 0',
    padding = '5px 10px',
    align = 'left',
    color = '#555',
    width = '100%',
    children
}) => {

    const sizes = {
        h1: '2.5em',
        h2: '2em',
        h3: '1.5em',
        h4: '1.2em',
        h5: '0.9em',
        h6: '0.85em',
    };

    return <div style={{
        fontWeight: thin ? '300' : (veryThin ? '100' : '900'),
        fontSize: sizes[type],
        color: color,
        borderBottom: rule ? 'solid 1px #ddd' : null,
        margin: margin,
        padding: padding,
        width,
        textAlign: align
    }}>
        {children}
    </div>;
};

export default Title;
