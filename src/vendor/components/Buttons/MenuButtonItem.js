import React from 'react'

export default function MenuButtonItem({
    opened,
    setOpened,
    onClick = () => {},
    children
}) {

    return (
        <div className="option" onClick={() => {
            setOpened(!opened);
            onClick();
        }}>
            {children}
        </div>
    )
}
