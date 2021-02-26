import React from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import Title from '../Typography/Title'
import CardContent from './CardContent'
import { Icon } from '../Icons/Icon'
import { useHistory } from 'react-router-dom'

export default function SectionCard({
    title = '',
    backRoute = null,
    children
}) {

  const history = useHistory();

    return (
        <div className="mb-4">
            <Card color="white">
                <CardHeader color="primary">
                    <div className="d-flex ai-center">
                      {backRoute && <div className="mr-3" onClick={() => {
                        history.push(backRoute);
                      }}>
                        <Icon name="back" color="#fff" />
                      </div>}
                      <Title
                        width="auto"
                        rule={false} padding="0" margin="0" color="#fff" thin type="h4">
                          {title}
                      </Title>
                    </div>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}
