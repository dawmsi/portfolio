import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselArea.scss'
export const CarouselArea = ({ CurrentItem, pause, isLight }) => {
    return (
        <>
            <Carousel
                bg={'transparent'}
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
                    <div className="inside__item">
                        {CurrentItem ? <CurrentItem /> : ''}
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
