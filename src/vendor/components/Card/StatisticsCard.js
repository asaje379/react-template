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
    totalValue = Math.ceil(Math.random() * 1000) + '',
    color = null,
    type = null,
    labels = null,
    values = null
}) {

    let data = {
        labels: labels ? labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
        datasets: values ? values : [{
            data: (new Array(7)).fill(0).map(el => Math.round(Math.random()*100))
        }]
    };
    console.log(data);

    const Chart = () => {
        if (type === 'line') {
            return <Line data={data} />;
        }
        if (type === 'pie') {
            return <Pie data={data} />;
        }
        if (type === 'bar') {
            return <Bar data={data} />;
        }
        if (type === 'doughnut') {
            return <Doughnut data={data} />;
        }
    };

    return (
        <Card>
            <CardHeader color={color}>
                <Icon size="3" name={icon} />
                <div>
                    <Title color={color && '#fff'} align="right" thin type="h3">{totalValue}</Title>
                    <Title color={color && '#fff'} align="right" thin type="h5">{title}</Title>
                </div>
            </CardHeader>
            {type ? <CardContent>
                <Chart />
            </CardContent>: null}
        </Card>
    )
}
