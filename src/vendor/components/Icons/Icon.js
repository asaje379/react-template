import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faChartBar, faHome, faAngleRight, faList, faBook, faBars, faCog, faToolbox, faTools, faCheck, faCheckCircle, faAngleDown, faChartLine, faChartPie, faChartArea, faSearch, faWindowClose, faTimesCircle, faExclamationTriangle, faInfoCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
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
    checkCircle: faCheckCircle,
    search: faSearch,
    close: faTimesCircle,
    warning: faExclamationTriangle,
    info: faInfoCircle,
    error: faExclamationCircle
};

export const Icon = ({
    name,
    color,
    onClick,
    weight,
    size
}) => <FontAwesomeIcon 
        onClick={onClick} 
        className={classes.icon} 
        icon={icons[name]}
        style={{
            fontSize: `${size}em`,
            color,
            fontWeight: weight
        }}  />;