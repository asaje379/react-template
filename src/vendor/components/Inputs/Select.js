import React, { Children, cloneElement, useState, useEffect } from 'react'
import { Icon } from '../Icons/Icon'

export default function Select({
    defaultValue,
    width,
    children
}) {

    const [value, setValue] = useState(defaultValue);
    const [option, setOption] = useState(defaultValue);
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
