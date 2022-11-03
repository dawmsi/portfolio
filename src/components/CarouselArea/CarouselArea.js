import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselArea.scss'
export const CarouselArea = () => {
    return (
        <>
            <Carousel variant="dark" controls={false} touch={true}>
                <Carousel.Item>scene1</Carousel.Item>
                <Carousel.Item>scene2</Carousel.Item>
                <Carousel.Item>scene3</Carousel.Item>
                <Carousel.Item>scene4</Carousel.Item>
                <Carousel.Item>scene5</Carousel.Item>
                <Carousel.Item>scene6</Carousel.Item>
            </Carousel>
        </>
    )
}
