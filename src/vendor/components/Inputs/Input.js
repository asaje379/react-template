import React, { useState } from 'react';
import classes from './Input.module.scss';
import { Icon } from '../Icons/icons';

const Input = ({
    label = '',
    name = '_' + Date.now(),
    required = false,
    icon = null,
    type = 'text',
    placeholder = '',
    min = null,
    max = null,
    minLength = 0,
    maxLength = 255,
    pattern = '',
    defaultValue = '',
    requireMsg = 'Ce champ est requis !',
    emailMsg = 'Adresse email invalide !',
    minMsg = 'Valeur minimale requise : ',
    maxMsg = 'Valeur minimale requise : ',
    minLengthMsg = '$ caractères minimum !',
    maxLengthMsg = '$ caractères maximu !',
}) => {

    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState('');

    const handleChange = (ev) => {
        const currentValue = ev.target.value;
        setValue(currentValue);

        if (required) {
            if (currentValue.length === 0) {
                setError(requireMsg);
            } else if (currentValue.length < minLength) {
                setError(minLengthMsg.replace('$', minLength + ''));
            } else if (currentValue.length > maxLength) {
                setError(maxLengthMsg.replace('$', maxLength + ''));
            } else if (type === 'email' && !/.+@.+\.[a-zA-Z]{2,8}/.test(currentValue)) {
                setError(emailMsg);
            } else {
                setError('');
            }

        }
    };

    if (label) {
        return <div className={classes.input}>
            <div className={classes.label}>
                {icon ? <div className={classes.icon}>
                    <Icon name={icon} />
                </div> : null}
                <div>
                    <label htmlFor={name}>{label}</label>
                    {required ? <span style={{
                        color: 'red'
                    }}> *</span> : null}
                </div>
            </div>
            <input
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
            />
            <span style={{
                color: 'red'
            }}>{error}</span>
        </div>
    } else {
        return <div className={classes.input2}>
            <div className={classes.inputt}>
                {icon ? <div className={classes.icon}>
                    <Icon name={icon} />
                </div> : null}
                <input
                    onChange={handleChange}
                    type={type}
                    placeholder={placeholder + (required ? ' *' : '')}
                    name={name}
                    value={value}
                />
            </div>
            <span style={{
                color: 'red'
            }}>{error}</span>
        </div>
    }
};

export default Input;