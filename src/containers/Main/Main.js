import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './Main.scss'
import { Title } from '../../components/Title'
import { MainRoutes } from './routes/MainRoutes'
export const Main = () => {
    return (
        <>
            <Card className="main">
                <Card.Body className="main__body">
                    <Row>
                        <Title />
                    </Row>
                    <Col className="main__col">
                        <MainRoutes></MainRoutes>
                    </Col>
                </Card.Body>
            </Card>
        </>
    )
}
