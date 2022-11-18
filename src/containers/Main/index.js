import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './Main.scss'
import { Title } from '../../components/Title'
import { MainRoutes } from '../../routes/MainRoutes'

export const Main = ({ isLight }) => {
    return (
        <>
            <Card className={isLight ? 'main text-dark' : ' main text-light'}>
                <Card.Body className="main__body">
                    <Row>
                        <Title isLight={isLight} />
                    </Row>
                    <Col className="main__col">
                        <MainRoutes isLight={isLight}></MainRoutes>
                    </Col>
                </Card.Body>
            </Card>
        </>
    )
}
