import React from 'react';
import classes from './navbar.module.scss';

const Toolbar = ({
    children
}) => {
    return <div className={classes.toolbar}>
        {children}
    </div>
};

export default Toolbar;