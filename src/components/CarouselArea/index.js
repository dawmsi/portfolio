import React from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { ItemsList } from '../ItemsList'
import './CarouselArea.scss'
export const CarouselArea = ({
    getImage,
    pause,
    itemsArray,
    CurrentItem,
    isLight
}) => {
    const [currentNumber, setCurrentNumber] = useState()
    const [overturn, setOverturn] = useState(false)
    const overturnHaddler = (e, num) => {
        if (overturn === true) {
            e?.currentTarget?.classList?.add('overturn__back')
        } else {
            e?.currentTarget?.classList?.remove('overturn__back')
        }
        setTimeout(() => {
            setOverturn(!overturn)
        }, 400)
        setCurrentNumber(num)
        e.currentTarget.classList.toggle('overturn')
    }

    return (
        <>
            <Carousel
                {...(overturn
                    ? { activeIndex: currentNumber, interval: null }
                    : { pause: 'hover' })}
                variant={isLight ? 'dark' : 'light'}
                controls={false}
                touch={true}
            >
                {itemsArray.map((cuIte) => (
                    <Carousel.Item
                        onClick={(e) => overturnHaddler(e, cuIte.id - 1)}
                        key={cuIte.id}
                        className={
                            isLight
                                ? 'bg-light text-dark'
                                : 'bg-dark text-light'
                        }
                    >
                        <div className="inside__item__container">
                            {!overturn ? (
                                <CurrentItem
                                    getImage={getImage}
                                    isLight={isLight}
                                    itemObj={cuIte}
                                />
                            ) : (
                                <ItemsList isLight={isLight} />
                            )}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
