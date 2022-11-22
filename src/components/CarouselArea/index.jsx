import React from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'

import './CarouselArea.scss'
export const CarouselArea = ({
    getImage,
    itemsArray,
    ItemsList,
    CurrentItem,
    BacksideItem,
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
                    ? {
                          activeIndex: currentNumber,
                          interval: null,
                          touch: false
                      }
                    : {
                          touch: true
                      })}
                variant={isLight ? 'dark' : 'light'}
                controls={false}
                pause="hover"
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
                                (BacksideItem && (
                                    <BacksideItem
                                        itemObj={cuIte}
                                        isLigh={isLight}
                                    />
                                )) ||
                                (ItemsList && (
                                    <ItemsList
                                        itemObj={cuIte}
                                        isLight={isLight}
                                    />
                                ))
                            )}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
