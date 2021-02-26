import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faChartBar, faHome, faAngleRight, faList, faBook, faBars, faCog, faToolbox, faTools, faCheck, faCheckCircle, faAngleDown, faChartLine, faChartPie, faChartArea, faSearch, faWindowClose, faTimesCircle, faExclamationTriangle, faInfoCircle, faExclamationCircle, faPlus, faPlusCircle, faUserPlus, faUpload, faGraduationCap, faUserCircle, faUsers, faDatabase, faPencilAlt, faFileInvoice, faPaperclip, faEye, faPaperPlane, faHourglassHalf, faShoePrints, faSignOutAlt, faCalendar, faUserSecret, faAddressCard, faTrash, faArrowLeft, faFolderOpen, faArrowsAltH, faSortNumericUp, faSortNumericDown, faRandom, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import classes from './icon.module.scss';

const icons = {
    user: faUser,
    userAdd: faUserPlus,
    userCircle: faUserCircle,
    users: faUsers,
    dashboard: faDatabase,
    toolbox: faToolbox,
    upload: faUpload,
    message: faEnvelope,
    lock: faLock,
    home: faHome,
    bar: faChartBar,
    line: faChartLine,
    pie: faChartPie,
    area: faChartArea,
    calendar: faCalendar,
    customer: faUserSecret,
    address: faAddressCard,
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
    error: faExclamationCircle,
    plus: faPlus,
    pencil: faPencilAlt,
    plusCircle: faPlusCircle,
    role: faGraduationCap,
    attachment: faPaperclip,
    eye: faEye,
    send: faPaperPlane,
    traitement: faHourglassHalf,
    step: faShoePrints,
    logout: faSignOutAlt,
    remove: faTrash,
    back: faArrowLeft,
    empty: faFolderOpen,
    arrows: faArrowsAltH,
    ascNumSort: faSortNumericUp,
    descNumSort: faSortNumericDown,
    random: faRandom,
    next: faForward,
    back: faBackward
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
