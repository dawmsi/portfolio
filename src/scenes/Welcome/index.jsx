import React from 'react'
import { Card } from 'react-bootstrap'
import './Welcome.scss'

export const Welcome = ({ isLight }) => {
    return (
        <Card
            style={
                isLight
                    ? { textShadow: 'rgba(0, 0, 0, 0.25) 0 0 13px' }
                    : { textShadow: 'rgba(255, 255, 255, 0.25) 0 0 13px' }
            }
            bg="transparent"
            className={
                isLight ? 'welcome__area text-light' : 'welcome__area text-dark'
            }
        >
            <Card.Title>Your Welcome</Card.Title>
            <Card.Text className="text-center">
                In this place you can check if the developer <br /> has the
                necessary skills for your projects
            </Card.Text>
        </Card>
    )
}
