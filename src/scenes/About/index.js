import React from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import avatarImg from './ava.JPEG'
import './About.scss'

export const About = ({ isLight }) => {
    return (
        <>
            <Row sm={12} className="about__row">
                <Col sm={3} className="about__col">
                    <Card.Title className="about__text">info</Card.Title>
                </Col>
                <Col sm={6} className="about__col">
                    <Card
                        style={{
                            backgroundImage: `url(${avatarImg})`
                        }}
                        border={isLight ? 'light' : 'dark'}
                        className="avatar"
                    ></Card>
                </Col>
                <Col sm={3} className="about__col">
                    <Card.Title
                        bg={isLight ? 'light' : 'dark'}
                        className="about__text"
                    >
                        more
                    </Card.Title>
                </Col>
            </Row>
        </>
    )
}
