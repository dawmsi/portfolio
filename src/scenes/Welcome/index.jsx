import React from 'react'
import { Card } from 'react-bootstrap'
import './Welcome.scss'

export const Welcome = ({ isLight }) => {
    return (
        <Card
            style={
                isLight
                    ? { textShadow: '0 0 13px rgba(0, 0, 0, 0.25)' }
                    : { textShadow: '0 0 13px rgba(255, 255, 255, 0.25)' }
            }
            bg="transparent"
            className={
                isLight ? 'welcome__area text-light' : 'welcome__area text-dark'
            }
        >
            <Card.Title>Your Welcome</Card.Title>
            <Card.Text className="text-center">
                Here you can check if the developer <br /> has the necessary
                skills for your projects
            </Card.Text>
        </Card>
    )
}
