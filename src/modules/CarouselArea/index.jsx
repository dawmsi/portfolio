import React from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { CarouselItem } from '../../components/CarouselItem'
import './CarouselArea.scss'
export const CarouselArea = ({
    getImage,
    itemsArray,
    CurrentItem,
    Backside,
    isLight
}) => {
    const [overturn, setOverturn] = useState(false)

    return (
        <>
            <Carousel
                {...(overturn
                    ? {
                          interval: null,
                          touch: false,
                          indicators: false
                      }
                    : {
                          touch: true
                      })}
                variant={isLight ? 'dark' : 'light'}
                controls={false}
                pause="hover"
            >
                {itemsArray.map((cuIte, index) => (
                    <Carousel.Item key={index}>
                        <CarouselItem
                            cuIte={cuIte}
                            index={index}
                            isLight={isLight}
                            overturn={overturn}
                            setOverturn={setOverturn}
                            getImage={getImage}
                            CurrentItem={CurrentItem}
                            Backside={Backside}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
