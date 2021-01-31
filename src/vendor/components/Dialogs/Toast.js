import React, { useState, useEffect } from 'react'
import { Icon } from '../Icons/Icon';

const matchIcons = {
    success: 'checkCircle',
    danger: 'error',
    secondary: 'warning',
    primary: 'info'
};

export default function Toast({
    open = false,
    setOpen = () => {},
    seconds = 4,
    delay = 0,
    color = 'primary',
    noIcon = false,
    children
}) {

    const [value, setValue] = useState(seconds);
    const css = 'bg-' + color;

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setOpen(false);
            }, seconds * 1000);
        }
    }, [open]);

    if (open) {
        return (
            <div className="toast">
                <div className={css}>
                    {matchIcons[color] && !noIcon ? <div className={css + ' icon'}>
                        <Icon color={color} name={matchIcons[color]} />
                    </div>: null}
                    <div>
                        {children}
                    </div>
                    <div className={css + ' icon'}>
                        <Icon onClick={() => {
                            setOpen(false);
                        }} color={color} name="close" />
                    </div>
                </div> 
            </div>
        )
    } else {
        return <></>
    }
}
