import React from 'react';

const Title = ({
    type = 'h1',
    thin = false,
    rule = false,
    margin = '10px 0',
    padding = '5px 10px',
    align = 'left',
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

    if (!'h1-h2-h3-h4-h5-h6'.split('-').includes(type)) {
        console.error('Unsupported type !')
        return <></>;
    } else {
        return <div style={{
            fontWeight: thin ? '100' : '900',
            fontSize: sizes[type],
            color: "#555",
            borderBottom: rule ? 'solid 1px #ddd' : null,
            margin: margin,
            padding: padding,
            textAlign: align
        }}>
            {children}
        </div>;
    }
};

export default Title;