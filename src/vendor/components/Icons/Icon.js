import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faChartBar, faHome, faAngleRight, faList, faBook, faBars, faCog, faToolbox, faTools, faCheck, faCheckCircle, faAngleDown, faChartLine, faChartPie, faChartArea } from '@fortawesome/free-solid-svg-icons';
import classes from './icon.module.scss';

const icons = {
    user: faUser,
    message: faEnvelope,
    lock: faLock,
    home: faHome,
    bar: faChartBar,
    line: faChartLine,
    pie: faChartPie,
    area: faChartArea,
    angleRight: faAngleRight,
    angleDown: faAngleDown,
    menu: faBars,
    list: faList,
    cog: faCog,
    book: faBook,
    tools: faTools,
    check: faCheck,
    checkCircle: faCheckCircle
};

export const Icon = ({
    name,
    onClick,
    size
}) => <FontAwesomeIcon 
        onClick={onClick} 
        className={classes.icon} 
        icon={icons[name]}
        style={{
            fontSize: `${size}em`
        }}  />;