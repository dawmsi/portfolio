import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselArea.scss'
export const CarouselArea = ({ image, CurrentItem, pause, isLight }) => {
    return (
        <>
            <Carousel
                variant={isLight ? 'dark' : 'light'}
                controls={false}
                touch={true}
                pause={pause}
            >
                <Carousel.Item
                    className={
                        isLight ? 'bg-light text-dark' : 'bg-dark text-light'
                    }
                >
                    {CurrentItem ? (
                        <Container className="inside__item__container">
                            <CurrentItem image={image} isLight={isLight} />
                        </Container>
                    ) : (
                        ''
                    )}
                </Carousel.Item>
                <Carousel.Item
                    className={
                        isLight ? 'bg-light text-dark' : 'bg-dark text-light'
                    }
                >
                    {CurrentItem ? (
                        <Container className="inside__item__container">
                            <CurrentItem isLight={isLight} />
                        </Container>
                    ) : (
                        ''
                    )}
                </Carousel.Item>
            </Carousel>
        </>
    )
}
