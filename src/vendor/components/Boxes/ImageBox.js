import React from 'react';

const ImageBox = ({
    url,
    opacity = '0.5',
    width = 'auto',
    height = 'auto',
    children
}) => {

    const color = `rgba(0, 0, 0, ${opacity})`;

    return (<div style={{
        backgroundImage: `url(${url})`,
        backgroundSize: '100% 100%',
        backgroundColor: color,
        color: '#fff',
        backgroundBlendMode: 'multiply',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height
    }}>
        {children}
    </div>);
};

export default ImageBox;