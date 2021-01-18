import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const icons = {
    user: faUser,
    message: faEnvelope,
    lock: faLock
};

export const Icon = ({
    name,
    rest
}) => <FontAwesomeIcon {...rest} icon={icons[name]} />;