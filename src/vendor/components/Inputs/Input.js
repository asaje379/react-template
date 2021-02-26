import React, { useState, useEffect } from 'react';
import classes from './Input.module.scss';
import { Icon } from '../Icons/Icon';
import { useForm } from './Form';

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
    maxLengthMsg = '$ caractères maximum !',
    onChange = () => {},
    formValue = {},
    setFormValue = () => {},
    mb = '30px',
    value = null
}) => {

    // const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState('');
    const clear = useForm();

    // useEffect(() => {
    //     setValue(defaultValue);
    // }, [clear]);

    const handleChange = (ev) => {
        const currentValue = ev.target.value;
        // setValue(currentValue);
        onChange(currentValue);

        if (required) {
            if (currentValue.length === 0) {
                setError(requireMsg);
                setFormValue({
                    ...formValue,
                    [name]: null,
                    [name + '_error']: true,
                });
            } else if (currentValue.length < minLength) {
                setError(minLengthMsg.replace('$', minLength + ''));
                setFormValue({
                    ...formValue,
                    [name]: null,
                    [name + '_error']: true,
                });
            } else if (currentValue.length > maxLength) {
                setError(maxLengthMsg.replace('$', maxLength + ''));
                setFormValue({
                    ...formValue,
                    [name]: null,
                    [name + '_error']: true,
                });
            } else if (type === 'email' && !/.+@.+\.[a-zA-Z]{2,8}/.test(currentValue)) {
                setError(emailMsg);
                setFormValue({
                    ...formValue,
                    [name]: null,
                    [name + '_error']: true,
                });
            } else {
                setError('');
                setFormValue({
                    ...formValue,
                    [name]: currentValue,
                    [name + '_error']: false
                });
            }
        } else {
            setFormValue({
                ...formValue,
                [name]: currentValue,
                [name + '_error']: false
            });
        }
    };

    if (label) {
        return <div className={classes.input} style={{
            marginBottom: mb
        }}>
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
                min={min}
                value={value ? value : defaultValue}
            />
            <span style={{
                color: 'red',
                fontSize: '0.75em'
            }}>{error}</span>
        </div>
    } else {
        return <div className={classes.input2} style={{
            marginBottom: mb
        }}>
            <div className={classes.inputt}>
                {icon ? <div className={classes.icon}>
                    <Icon name={icon} />
                </div> : null}
                <input
                    onChange={handleChange}
                    type={type}
                    min={min}
                    placeholder={placeholder + (required ? ' *' : '')}
                    name={name}
                    value={value ? value: defaultValue}
                />
            </div>
            <span style={{
                color: 'red',
                fontSize: '0.75em'
            }}>{error}</span>
        </div>
    }
};

export default Input;
