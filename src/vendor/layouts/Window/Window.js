import React from 'react';
import classes from './window.module.scss';

const Window = ({
    left = '0',
    top = '0',
    bgColor = '$fafafa',
    padding = '50px',
    overflow = 'auto',
    children
}) => {
    return <div className={classes.window} style={{
        left,
        width: `calc(100% - ${left})`,
        backgroundColor: bgColor,
        padding,
        top,
        height: `calc(100vh - ${top})`,
        overflow
    }}>
        {children}
    </div>
};

export default Window;