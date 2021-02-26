import React from 'react'

export default function Item({
    nohover = false,
    children
}) {
    return (
        <div className={nohover ? 'item-no-hover': 'item'}>
            {children}
        </div>
    )
}
