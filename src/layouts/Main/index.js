import React from 'react'
import { Card } from 'react-bootstrap'
import { Title } from '../../components/Title'
import { Outlet } from 'react-router-dom'
import './Main.scss'

export const Main = ({ isLight }) => {
    return (
        <>
            <Card className={isLight ? 'main text-dark' : ' main text-light'}>
                <Card.Body className="main__body">
                    <div>
                        <Title isLight={isLight} />
                    </div>
                    <div className="main__col">
                        <Outlet />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
