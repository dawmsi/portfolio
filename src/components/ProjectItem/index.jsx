import React, { useEffect, useState } from 'react'
import { Button, Card, Figure } from 'react-bootstrap'
import { Fingerprint } from 'react-bootstrap-icons'
import { imageFetcher } from '../../services/imageFetcher/imageFetcher'
import './ProjectItem.scss'
export const ProjectItem = ({ itemObj, isLight }) => {
    const [img, setImg] = useState('')

    useEffect(() => {
        imageFetcher(itemObj.link, setImg)
    }, [itemObj.link])

    return (
        <>
            <Card className="current__card">
                {img ? (
                    <div className="current__img__container">
                        <div
                            className="current__img"
                            style={{
                                backgroundImage: `url(${img})`
                            }}
                        ></div>
                        <div
                            className={
                                isLight
                                    ? 'current__button__area hint light'
                                    : 'current__button__area hint dark'
                            }
                        >
                            <Button
                                className="current__button"
                                variant={isLight ? 'light' : 'dark'}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <a
                                    target="_blank"
                                    className={
                                        isLight ? 'link-light' : 'link-dark'
                                    }
                                    href={itemObj.link}
                                >
                                    <Fingerprint size={48} />
                                </a>
                            </Button>
                        </div>
                    </div>
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
                </Card.Body>
            </Card>
        </>
    )
}
