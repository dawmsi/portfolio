import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselArea.scss'
export const CarouselArea = () => {
    return (
        <>
            <Carousel variant="dark" controls={false} touch={true}>
                <Carousel.Item>item1</Carousel.Item>
                <Carousel.Item>item2</Carousel.Item>
                <Carousel.Item>item3</Carousel.Item>
                <Carousel.Item>item4</Carousel.Item>
                <Carousel.Item>item5</Carousel.Item>
                <Carousel.Item>item6</Carousel.Item>
            </Carousel>
        </>
    )
}
