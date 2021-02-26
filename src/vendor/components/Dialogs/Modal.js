import React from 'react'
import Title from '../Typography/Title';
import { Icon } from '../Icons/Icon';

export default function Modal({
    title = '',
    open = false,
    setOpen = () => {},
    children
}) {
    return (
        <>
            {open ? <div className="modal-container">
                <div className="modal">
                    <div className="header">
                        <Title type="h3" margin="0" padding="0 0 5px 0">{title}</Title>
                        <Icon color="red" size="1.5" name="close" onClick={() => {
                            setOpen(false);
                        }} />
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>: null}
        </>
    )
}
