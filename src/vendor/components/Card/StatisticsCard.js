import React from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import { Icon } from '../Icons/Icon'
import Title from '../Typography/Title'
import CardContent from './CardContent'


export default function StatisticsCard({
    icon = 'line',
    title = 'Lorem ipsum',
    totalValue = Math.ceil(Math.random() * 1000) + '',
    color = null
}) {
    return (
        <Card>
            <CardHeader color={color}>
                <Icon size="3" name={icon} />
                <div>
                    <Title color={color && '#fff'} align="right" thin type="h3">{totalValue}</Title>
                    <Title color={color && '#fff'} align="right" thin type="h5">{title}</Title>
                </div>
            </CardHeader>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}
