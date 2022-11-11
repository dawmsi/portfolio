import React from 'react'
import { Button, Card, Figure } from 'react-bootstrap'
import './CurrentItem.scss'
export const CurrentItem = ({ image, isLight }) => {
    return (
        <>
            <Card className="current__card">
                {image ? (
                    <Card.Img
                        className="current__img"
                        variant="top"
                        src={image}
                    />
                ) : (
                    <Figure className="noimage">No image</Figure>
                )}
                <Card.Body className="current__body">
                    <Card.Title className="current__title">Modest</Card.Title>
                    <Card.Text className="current__text">Lorem</Card.Text>
                    <div className="current__button__area">
                        <Button
                            className="current__button"
                            variant={isLight ? 'dark' : 'light'}
                        >
                            <a
                                className={isLight ? 'link-light' : 'link-dark'}
                                href="https://dawmsi.github.io/blog-project/"
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
