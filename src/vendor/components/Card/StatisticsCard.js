import React from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import { Icon } from '../Icons/Icon'
import Title from '../Typography/Title'
import CardContent from './CardContent'
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';


export default function StatisticsCard({
    icon = 'line',
    title = 'Lorem ipsum',
    iconColor = null,
    totalValue = Math.ceil(Math.random() * 1000) + '',
    color = null,
    type = null,
    labels = null,
    values = null,
    height = null,
    noheader = false,
}) {

    let data = {
        labels: labels ? labels : ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
        datasets: values ? values : [{
            data: (new Array(7)).fill(0).map(() => Math.round(Math.random() * 100))
        }]
    };
    console.log(data);

    const Chart = () => {
        if (type === 'line') {
            return <Line data={data} options={{
                maintainAspectRatio: false
            }} />;
        }
        if (type === 'pie') {
            return <Pie data={data} options={{
                maintainAspectRatio: false
            }} />;
        }
        if (type === 'bar') {
            return <Bar data={data} options={{
                maintainAspectRatio: false
            }} />;
        }
        if (type === 'doughnut') {
            return <Doughnut data={data} options={{
                maintainAspectRatio: false
            }} />;
        }
    };

    return (
        <Card>
            {!noheader ? <CardHeader color={color}>
                <Icon color={iconColor} size="2.5" name={icon} />
                <div>
                    <Title color={color && '#fff'} align="right" thin type="h3">{totalValue}</Title>
                    <Title color={color && '#fff'} align="right" thin type="h5">{title}</Title>
                </div>
            </CardHeader> : null}
            {type ? <CardContent color={color}>
                <div style={{ maxHeight: height ? height : 'auto' }}>
                    <Chart />
                </div>
            </CardContent> : null}
        </Card>
    )
}
