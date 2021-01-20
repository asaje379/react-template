import React from 'react';
import classes from './navbar.module.scss';

const Statusbar = ({
    children
}) => {
    return <div className={classes.statusbar}>
        {children}
    </div>
};

export default Statusbar;