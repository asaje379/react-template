import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const icons = {
    message: faEnvelope
};

export const Icon = ({
    name,
    rest
}) => <FontAwesomeIcon {...rest} icon={icons[name]} />;