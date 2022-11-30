import React, { useEffect, useState } from 'react'
import { Button, Card, Figure, Spinner } from 'react-bootstrap'
import { Fingerprint } from 'react-bootstrap-icons'
import { imageFetcher } from '../../services/imageFetcher/imageFetcher'
import './ProjectItem.scss'
export const ProjectItem = ({ itemObj, isLight }) => {
    const [loading, setLoading] = useState(false)
    const [img, setImg] = useState('')

    useEffect(() => {
        if (imageFetcher(itemObj.link, setImg) && !img) {
            setLoading(true)
            imageFetcher(itemObj.link, setImg)
            setLoading(false)
        }
    }, [img, itemObj.link])

    return (
        <>
            <Card className="project__card">
                {!loading && img ? (
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
                    /* <Figure className="no__image">
                        <p>No image</p>
                    </Figure> */
                    <Figure
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className={isLight ? 'link-dark' : 'link-light'}
                            href={itemObj.link}
                        >
                            <Fingerprint className="hint" size={48} />
                        </a>
                        <Spinner
                            style={{ margin: '0 auto' }}
                            animation="border"
                            variant={isLight ? 'dark' : 'light'}
                            size="xxl"
                        />
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
