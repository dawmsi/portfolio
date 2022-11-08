import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import './Title.scss'
export const Title = ({ isLight }) => {
    return (
        <>
            <Col className="title__col">
                <Container className="title__container">
                    <Row
                        className={
                            isLight
                                ? 'title__row bg-light text-dark'
                                : ' title__row bg-dark text-light'
                        }
                    >
                        <Breadcrumb className="title__col">
                            <Breadcrumb.Item
                                className={isLight ? 'text-dark' : 'text-light'}
                                active
                            >
                                now
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
            </Col>
        </>
    )
}
