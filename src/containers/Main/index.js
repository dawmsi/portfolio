import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './Main.scss'
import { Title } from '../../components/Title'
import { MainRoutes } from '../../routes/MainRoutes'
import { useState } from 'react'

export const Main = ({ isLight }) => {
    const [isCarouseled, setIsCarouseled] = useState(true)
    return (
        <>
            <Card className={isLight ? 'main text-dark' : ' main text-light'}>
                <Card.Body className="main__body">
                    <Row>
                        <Title isLight={isLight} />
                    </Row>
                    <Col className="main__col">
                        <MainRoutes
                            isCarouseled={isCarouseled}
                            isLight={isLight}
                        ></MainRoutes>
                    </Col>
                </Card.Body>
            </Card>
        </>
    )
}
