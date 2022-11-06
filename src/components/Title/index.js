import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Title.scss'
export const Title = () => {
    return (
        <>
            <Col className="title__col">
                <Container className="title__container">
                    <Row className="title__row">Title</Row>
                </Container>
            </Col>
        </>
    )
}
