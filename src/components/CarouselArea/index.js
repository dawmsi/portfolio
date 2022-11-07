import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselArea.scss'
export const CarouselArea = ({ isLight }) => {
    return (
        <>
            <Carousel
                variant={isLight ? 'dark' : 'light'}
                controls={false}
                touch={true}
            >
                <Carousel.Item>
                    <div className="inside__item">Item1</div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="inside__item">Item2</div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="inside__item">Item3</div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="inside__item">Item4</div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="inside__item">Item5</div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="inside__item">Item6</div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
