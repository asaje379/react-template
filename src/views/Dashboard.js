import React from 'react'
import Grid from '../vendor/layouts/Grid/Grid';
import Col from '../vendor/layouts/Grid/Col';
import StatisticsCard from '../vendor/components/Card/StatisticsCard';
import Checkbox from '../vendor/components/Inputs/Checkbox';
import Select from '../vendor/components/Inputs/Select';
import Option from '../vendor/components/Inputs/Option';
import Datatable from '../vendor/components/Datatable/Datatable';

export default function Dashboard() {
    return (
        <div>
            <Grid width="100%" spacing="2">
                <Col>
                    <StatisticsCard type='line' />
                </Col>
                <Col>
                    <StatisticsCard type='bar' icon="bar" color="primary" />
                </Col>
                <Col>
                    <StatisticsCard type='pie' icon="pie" color="secondary" />
                </Col>
                <Col>
                    <StatisticsCard type='doughnut' icon="area" color="success" />
                </Col>
            </Grid>

            <Datatable />
        </div>
    )
}
