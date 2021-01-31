import React from 'react'

export default function Modal({
    title = 'Confirmation',
    open = false,
    setOpen = () => {},
    children
}) {
    return (
        <>
            {open ? <div className="confirm-container">
                <div className="confirm">
                    <div className="header">
                        <Title margin="0" padding="0 0 5px 0">{title}</Title>
                        <Icon color="red" size="1.5" name="close" onClick={() => {
                            setOpen(false);
                        }} />
                    </div>
                    <div className="body">
                        <Title thin type="h3" padding="0">{children}</Title>
                    </div>
                    <div className="footer">
                        <Button onClick={() => {
                            setOpen(false);
                            onCancel();
                        }} style={{marginRight: '10px'}} color="danger" rounded>Annuler</Button>
                        <Button onClick={() => {
                            setOpen(false);
                            onConfirm();
                        }} rounded>Confirmer</Button>
                    </div>
                </div>
            </div>: null}
        </>
    )
}
