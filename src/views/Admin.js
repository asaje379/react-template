import React from 'react'
import Mainwindow from '../vendor/layouts/Mainwindow/Mainwindow'
import Sidebar from '../components/Sidebar'

export default function Admin() {
    return (
        <div>
            <Mainwindow 
                sidebar={<Sidebar />} />
        </div>
    )
}
