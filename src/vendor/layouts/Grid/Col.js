import React, { useState, useEffect } from 'react';
import classes from './grid.module.scss';

const Col = ({
    width,
    height,
    bgColor,
    margin,
    padding,
    children
}) => {
    const [mar, setMargin] = useState(margin);

    useEffect(() => {
      window.addEventListener('resize', () => {
        setMargin(window.innerWidth < 800 ? (margin * 10) + 'px': '0px');
      })
    });

    return <div style={{
        width: (width - (2 * margin)) + '%',
        height,
        backgroundColor: bgColor,
        margin: mar,
        padding
    }} className={classes.col}>
        {children}
    </div>
};

export default Col;