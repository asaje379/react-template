import React, { useState } from 'react'
import Title from '../Typography/Title'
import { Icon } from '../Icons/Icon'
import Button from '../Buttons/Button'

export default function Confirm({
    title = 'Confirmation',
    open = false,
    setOpen = () => { },
    onConfirm = () => { },
    onCancel = () => { },
    children = 'Etes-vous sûr de vouloir effectuer cette action ?'
}) {

    return (
        <>
            {open ? <div className="confirm-container">
                <div className="confirm">
                    <div className="header">
                        <Title margin="0" padding="0 0 5px 0" type="h3">{title}</Title>
                        <Icon color="red" size="1.5" name="close" onClick={() => {
                            setOpen(false);
                        }} />
                    </div>
                    <div className="body">
                        <Title thin type="h4" padding="0">{children}</Title>
                    </div>
                    <div className="footer">
                        <Button lg onClick={() => {
                            setOpen(false);
                            onCancel();
                        }} style={{ marginRight: '10px' }} color="danger" rounded>Annuler</Button>
                        <Button lg style={{
                            backgroundColor: 'midnightblue',
                            color: '#fff'
                        }} onClick={() => {
                            setOpen(false);
                            onConfirm();
                        }} rounded>Confirmer</Button>
                    </div>
                </div>
            </div> : null}
        </>
    )
}
