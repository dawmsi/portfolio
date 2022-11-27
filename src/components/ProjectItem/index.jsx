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
            <Card className="project__card">
                {img ? (
                    <div className="project__img__container">
                        <div
                            className="project__img"
                            style={{
                                backgroundImage: `url(${img})`
                            }}
                        ></div>
                        <div
                            className={
                                isLight
                                    ? 'project__button__area hint light'
                                    : 'project__button__area hint dark'
                            }
                        >
                            <Button
                                className="project__button"
                                variant={isLight ? 'light' : 'dark'}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <a
                                    target="_blank"
                                    rel="noreferrer"
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

                <Card.Body className="project__body">
                    <Card.Title className="project__title">
                        {itemObj.name}
                    </Card.Title>
                    <Card.Text className="project__text">
                        {itemObj.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
