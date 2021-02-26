import React from 'react'
import Card from '../Card/Card'
import { Icon } from '../Icons/Icon'
import { base64Upload } from '../../services/upload/base64Upload';
import { upload } from '../../services/firebase-backend/firebase.config';
import { useState } from 'react';

export default function FileUpload({
    label,
    icon,
    uploadIcon = 'upload',
    required,
    formValue,
    setFormValue,
    uploadType = 'base64',
    mb = '30px',
    uploadedFile, 
    setUploadedFile,
    name
}) {

    return (
        <div className="d-flex ai-center jc-btw mt-3 mb-3" style={{
            border: 'solid 1px #aaa',
            borderRadius: '5px',
            marginBottom: mb
        }}>
            <div className="d-flex ai-center ml-3">
                {icon ? <div className="mr-2">
                    <Icon name={icon} />
                </div> : null}
                {label ? <div>
                    {label} {required ? <span className="text-danger"> *</span> : null}
                </div> : null}
            </div>
            <Card expand={false} color="primary" onClick={() => {
                document.getElementById('file_upload').click();
            }}>
                {!uploadedFile ? <div
                    className="d-flex ai-center jc-center p-4 m-4">
                    <div
                        className="d-flex jc-center ai-center"
                        style={{ width: '25px', height: '100%' }}>
                        <Icon name={uploadIcon} size="1" />
                    </div>
                </div> :
                    <img src={uploadedFile} alt="UPLOADED" width="50" height="50" />}
                <input type="file" id="file_upload" onChange={async (e) => {
                    const file = e.target.files[0];
                    let uploadResult = null;

                    if (file) {
                        switch (uploadType) {
                            case 'base64':
                                uploadResult = await base64Upload(file);
                                break;
                            case 'firebase':
                                uploadResult = await upload('users', 'user', file);
                                break;
                        }
                    }
                    setUploadedFile(uploadResult);
                    if (uploadResult) {
                        setFormValue({
                            ...formValue,
                            [name]: uploadResult,
                            [name + '_error']: false
                        });
                    } else {
                        setFormValue({
                            ...formValue,
                            [name]: uploadResult,
                            [name + '_error']: true
                        });
                    }
                }} style={{ display: 'none' }} />
            </Card>
        </div>
    )
}
