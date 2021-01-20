import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faChartBar, faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classes from './icon.module.scss';

const icons = {
    user: faUser,
    message: faEnvelope,
    lock: faLock,
    home: faHome,
    chart: faChartBar,
    angleRight: faAngleRight
};

export const Icon = ({
    name,
    rest
}) => <FontAwesomeIcon className={classes.icon} {...rest} icon={icons[name]} />;