import React from 'react'
import { Card } from 'react-bootstrap'
import './Welcome.scss'

export const Welcome = ({ isLight }) => {
    return (
        <Card
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
