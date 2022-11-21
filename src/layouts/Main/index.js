import React from 'react'
import { Card } from 'react-bootstrap'
import { Title } from '../../components/Title'
import { Outlet } from 'react-router-dom'
import './Main.scss'

export const Main = ({ isLight }) => {
    return (
        <>
            <Card
                style={
                    isLight
                        ? {
                              backgroundColor: 'rgba(113, 113, 113, 0.1)',
                              boxShadow: '0px 0px 8px 8px rgba(113, 113, 113, 0.1)'
                          }
                        : {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              boxShadow:
                                  '0px 0px 8px 6px rgba(255, 255, 255, 0.1)'
                          }
                }
                className={isLight ? 'main text-dark' : ' main text-light'}
            >
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
