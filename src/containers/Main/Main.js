import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './Main.scss'
import { Title } from '../../components/Title/Title'
import { CarouselArea } from '../../components/CarouselArea/CarouselArea'
export const Main = () => {
    return (
        <>
            <Card className="main">
                <Card.Body className="main__body">
                    <Row>
                        <Title />
                    </Row>

                        <Col className="main__col">
                            <CarouselArea />
                        </Col>

                </Card.Body>
            </Card>
        </>
    )
}
