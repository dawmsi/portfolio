import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './CurrentItem.scss'
export const CurrentItem = ({ isLight }) => {
    return (
        <>
            <Card className="current__card">
                <Card.Img
                    className="current__img"
                    variant="top"
                    src="https://www.site-shot.com/cached_image/X2nh7mDuEe2qWAJCrBEAAw"
                />
                <Card.Body className="current__body">
                    <Card.Title className="current__title">
                        Tatto Ink
                    </Card.Title>
                    <Card.Text className="current__text">
                        Site for tattoo parlor
                    </Card.Text>
                    <div className="current__button__area">
                        <Button
                            className="current__button"
                            variant={isLight ? 'dark' : 'light'}
                        >
                            <a
                                className={isLight ? 'link-light' : 'link-dark'}
                                href="https://dawmsi.github.io/tatoo-project/"
                            >
                                Check
                            </a>
                        </Button>
                        <Button
                            className="current__button"
                            variant={isLight ? 'dark' : 'light'}
                        >
                            Details
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
