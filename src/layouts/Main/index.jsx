import React from 'react'
import { Card } from 'react-bootstrap'
import { Title } from '../../modules/Title'
import { Outlet } from 'react-router-dom'

import './Main.scss'

export const Main = ({ isLight }) => {
    return (
        <>
            <Card
                style={
                    isLight
                        ? {
                              backgroundColor: 'rgba(25, 25, 25, 0.2)',
                              boxShadow: '0px 0px 8px 8px rgba(25, 25, 25, 0.2)'
                          }
                        : {
                              backgroundColor: 'rgba(245, 245, 245, 0.1)',
                              boxShadow:
                                  '0px 0px 8px 8px rgba(245, 245, 245, 0.1)'
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
