import React, { useState, Children, cloneElement } from 'react'
import { Icon } from '../Icons/Icon';

export default function MenuButton({
    title,
    width,
    children
}) {

    const [opened, setOpened] = useState(false);

    const newChildren = Children.map(children, child => cloneElement(child, {
        opened,
        setOpened
    }));

    return (
        <div className="select" style={{ width }}>
            <div className="select-zone" onClick={() => setOpened(!opened)}>
                <div>{title}</div>
                <Icon name="angleDown" />
            </div>
            {opened ? <div className="options">
                {newChildren}
            </div> : null}
        </div>
    )
}
