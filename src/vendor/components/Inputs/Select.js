import React, { Children, cloneElement, useState, useEffect } from 'react'
import { Icon } from '../Icons/Icon'
import { useForm } from './Form';

export default function Select({
    defaultValue,
    defaultText,
    label,
    icon,
    required,
    formValue = {},
    setFormValue = () => { },
    name,
    mb = '30px',
    width,
    children
}) {

    let defaultOption = null;
    Children.forEach(children, child => {
        if (child.props.value === defaultValue) defaultOption = child.props.children;
    });

    if (!defaultOption) defaultOption = defaultText;

    const [value, setValue] = useState(defaultValue);
    const [option, setOption] = useState(defaultOption);
    const [opened, setOpened] = useState(false);
    const clear = useForm();

    useEffect(() => {
        setFormValue({
            ...formValue,
            [name]: value,
            [name + '_error']: false
        });
    }, [value])

    useEffect(() => {
        setValue(defaultValue);
        setOption(defaultText);
    }, [clear]);

    const newChildren = Children.map(children, child => cloneElement(child, {
        setValue,
        setOption,
        opened,
        setOpened
    }));

    return (
        <div>
            <div className="d-flex ai-center ml-1">
                {icon ? <div className="mr-2"><Icon name={icon} /></div> : null}
                {label ? <div>
                    {label}{required ? <span className="text-danger"> *</span> : ''}
                </div> : null}
            </div>
            <div className="select" style={{ width, marginBottom: mb }}>
                <div className="select-zone" onClick={() => setOpened(!opened)}>
                    <div>{option}</div>
                    <Icon name="angleDown" />
                </div>
                {opened ? <div className="options">
                    {newChildren}
                </div> : null}
            </div>
        </div>
    )
}
