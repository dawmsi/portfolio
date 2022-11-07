import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import './Title.scss'
export const Title = (isLight) => {
    return (
        <>
            <Col className="title__col">
                <Container className="title__container">
                    <Row className="title__row">
                        <Breadcrumb
                            className="title__col"
                            color={isLight ? 'light' : 'dark'}
                        >
                            <Breadcrumb.Item active>now</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
            </Col>
        </>
    )
}
