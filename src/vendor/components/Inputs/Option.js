import React from 'react'

export default function Option({
    value = null,
    disabled = false,
    opened,
    setValue,
    setOption,
    setOpened,
    children
}) {

    let css = 'option';
    if (disabled) css += ' option-disabled';

    return (
        <div className={css} onClick={() => {
            if (!disabled) {
                setValue(value);
                console.log(children);
                setOption(children);
                setOpened(!opened)
            }
        }}>
            {children}
        </div>
    )
}