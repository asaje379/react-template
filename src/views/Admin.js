import React from 'react'
import Mainwindow from '../vendor/layouts/Mainwindow/Mainwindow'
import Sidebar from '../components/Sidebar'
import img from '../assets/opencts.png';

export default function Admin() {
    return (
        <div>
            <Mainwindow 
                image={img}
                // sidebar={<Sidebar />} 
                />
        </div>
    )
}
