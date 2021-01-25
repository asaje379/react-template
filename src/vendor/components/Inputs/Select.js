import React, { Children, cloneElement, useState, useEffect } from 'react'
import { Icon } from '../Icons/Icon'

export default function Select({
    defaultValue,
    defaultText,
    width,
    children
}) {

    let defaultOption = null;
    Children.forEach(children, child => {
        if(child.props.value === defaultValue) defaultOption = child.props.children;
    });

    if (!defaultOption) defaultOption = defaultText;

    const [value, setValue] = useState(defaultValue);
    const [option, setOption] = useState(defaultOption);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        console.log('Selected: ', value);
        console.log('Option: ', option);
    }, [value])

    const newChildren = Children.map(children, child => cloneElement(child, {
        setValue,
        setOption,
        opened,
        setOpened
    }));

    return (
        <div className="select" style={{width}}>
            <div className="select-zone" onClick={() => setOpened(!opened)}>
                <div>{option}</div>
                <Icon name="angleDown" />
            </div>
            {opened ? <div className="options">
                {newChildren}
            </div> : null}
        </div>
    )
}
