import React, { useState, useEffect } from 'react'
import { Icon } from '../Icons/Icon'

export default function Checkbox({
    checked = false,
    color = 'primary',
    onChange = v => v,
    children
}) {

    const [isChecked, setChecked] = useState(checked);
    let css = children ? 'labeled-checkbox' : 'checkbox';

    useEffect(() => setChecked(checked), [checked]);

    return (
        <div className="d-flex ai-center jc-center w-auto">
            <div 
                className={isChecked ? (css + ' bg-' + color + ' border-' + color) : css}
                onClick={() => {
                    setChecked(!isChecked);
                    onChange(!isChecked);
                }}>
                {isChecked ? <Icon size="0.5" weight="0" name="check" /> : null}
            </div>
            {children}
        </div>
    )
}
