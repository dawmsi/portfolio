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
                              backgroundColor: 'rgba(0, 0, 0, 0.4)',
                              boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.2)'
                          }
                        : {
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              boxShadow:
                                  '0px 0px 8px 4px rgba(255, 255, 255, 0.2)'
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
