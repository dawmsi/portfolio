import React from 'react'
import { Button, Card, Figure } from 'react-bootstrap'
import './ProjectItem.scss'
export const ProjectItem = ({ isLight, itemObj }) => {
    return (
        <>
            <Card className="current__card">
                {itemObj.image ? (
                    <div
                        className="current__img"
                        style={{ backgroundImage: `url(${itemObj.image})` }}
                    ></div>
                ) : (
                    <Figure className="no__image">
                        <p>No image</p>
                    </Figure>
                )}

                <Card.Body className="current__body">
                    <Card.Title className="current__title">
                        {itemObj.name}
                    </Card.Title>
                    <Card.Text className="current__text">
                        {itemObj.description}
                    </Card.Text>
                    <div className="current__button__area">
                        <Button
                            className="current__button"
                            variant={isLight ? 'dark' : 'light'}
                        >
                            <a
                                className={isLight ? 'link-light' : 'link-dark'}
                                href={itemObj.link}
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
