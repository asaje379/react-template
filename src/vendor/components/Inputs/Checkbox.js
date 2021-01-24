import React, { useState } from 'react'
import { Icon } from '../Icons/Icon'

export default function Checkbox({
    checked = false,
    color = 'primary',
    children
}) {

    const [isChecked, setChecked] = useState(checked);

    let css = children ? 'labeled-checkbox' : 'checkbox';

    return (
        <div className="d-flex ai-center jc-center w-auto">
            <div 
                className={isChecked ? (css + ' bg-' + color + ' border-' + color) : css}
                onClick={() => setChecked(!isChecked)}>
                {isChecked ? <Icon size="0.5" weight="0" name="check" /> : null}
            </div>
            {children}
        </div>
    )
}
