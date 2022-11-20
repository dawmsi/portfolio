import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './Main.scss'
import { Title } from '../../components/Title'
import { Outlet } from 'react-router-dom'

export const Main = ({ isLight }) => {
    return (
        <>
            <Card className={isLight ? 'main text-dark' : ' main text-light'}>
                <Card.Body className="main__body">
                    <Row>
                        <Title isLight={isLight} />
                    </Row>
                    <Col className="main__col"><Outlet /></Col>
                </Card.Body>
            </Card>
        </>
    )
}
