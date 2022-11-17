import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselArea.scss'
export const CarouselArea = ({ pause, itemsArray, CurrentItem, isLight }) => {
    return (
        <>
            <Carousel
                variant={isLight ? 'dark' : 'light'}
                controls={false}
                touch={true}
                pause={pause}
            >
                {itemsArray.map((cuIte) => (
                    <Carousel.Item
                        key={cuIte.id}
                        className={
                            isLight
                                ? 'bg-light text-dark'
                                : 'bg-dark text-light'
                        }
                    >
                        {CurrentItem ? (
                            <Container className="inside__item__container">
                                <CurrentItem
                                    isLight={isLight}
                                    itemObj={cuIte}
                                />
                            </Container>
                        ) : (
                            ''
                        )}
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
