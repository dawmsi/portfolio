import React from 'react'
import { Button, Card, Figure } from 'react-bootstrap'
import './CurrentItem.scss'
export const CurrentItem = ({ image, isLight }) => {
    return (
        <>
            <Card className="current__card">
                {image ? (
                    <div
                        className="current__img"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ) : (
                    <Figure className="no__image">
                        <p>No image</p>
                    </Figure>
                )}

                <Card.Body className="current__body">
                    <Card.Title className="current__title">Modest</Card.Title>
                    <Card.Text className="current__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quae sequi adipisci nostrum mollitia cupiditate enim minima quis ipsa quidem, consectetur veniam. Tempora accusamus sunt id, asperiores ipsam suscipit itaque fugit animi. Eum incidunt quae ab, culpa quibusdam, laboriosam aliquid vitae vel magni ipsa deserunt natus. Nostrum quae iste error consequuntur nam officiis voluptas vel! Sequi voluptates doloremque eveniet omnis, est consequuntur. Magni vel, minima a quo et quaerat facilis laboriosam qui odio inventore omnis laudantium reiciendis reprehenderit saepe modi, id voluptates quam autem quae voluptate facere excepturi dicta consequuntur sit? Atque distinctio quia soluta voluptate itaque, unde ducimus vitae.</Card.Text>
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
