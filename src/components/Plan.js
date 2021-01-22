import React from 'react'
import { useParams } from 'react-router-dom'

export default function Plan() {

    const { id } = useParams();

    return (
        <div>
            Plan {id}      
        </div>
    )
}
