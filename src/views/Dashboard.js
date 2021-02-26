import React from 'react'
import Grid from '../vendor/layouts/Grid/Grid';
import Col from '../vendor/layouts/Grid/Col';
import StatisticsCard from '../vendor/components/Card/StatisticsCard';
import Datatable from '../vendor/components/Datatable/Datatable';

export default function Dashboard() {
    return (
        <div>
            <div className="mb-4">
                <Grid width="100%" spacing="2">
                    <Col>
                        <StatisticsCard />
                    </Col>
                    <Col>
                        <StatisticsCard icon="bar" color="primary" />
                    </Col>
                    <Col>
                        <StatisticsCard icon="pie" color="secondary" />
                    </Col>
                    <Col>
                        <StatisticsCard icon="area" color="success" />
                    </Col>
                </Grid>
            </div>

            <div className="mt-4">
                <Datatable onSelectionChange={values => console.log(values)} />
            </div>
        </div>
    )
}
