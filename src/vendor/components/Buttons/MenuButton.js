import React, { useState, Children, cloneElement } from 'react'
import { Icon } from '../Icons/Icon';

export default function MenuButton({
    title,
    width,
    top = false,
    color = 'light',
    children
}) {

    const [opened, setOpened] = useState(false);

    const newChildren = Children.map(children, child => cloneElement(child, {
        opened,
        setOpened
    }));

    const css = 'select-zone bg-' + color;

    return (
        <div className="select" style={{ width }}>
            <div className={css} onClick={() => setOpened(!opened)}>
                <div>{title}</div>
                <Icon name="angleDown" />
            </div>
            {opened ? <div className={top ? 'options-top': 'options'}>
                {newChildren}
            </div> : null}
        </div>
    )
}
