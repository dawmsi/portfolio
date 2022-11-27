import React from 'react'
import { useState } from 'react'
import './CarouselItem.scss'
export const CarouselItem = ({
    cuIte,
    index,
    isLight,
    overturn,
    setOverturn,
    getImage,
    CurrentItem,
    Backside
}) => {
    const [localOverturn, setLocalOverturn] = useState(overturn)

    const localOverturnHandler = (el) => {
        const card = el.currentTarget
        setOverturn((overturn) => !overturn)
        if (localOverturn === true) {
            card.classList.add('overturn__back')
            setTimeout(() => {
                card.classList.remove('overturn__back')
            }, 900)
        } else {
            card.classList.remove('overturn__back')
        }
        setTimeout(() => {
            setLocalOverturn(!localOverturn)
        }, 400)
        card.classList.toggle('overturn')
    }

    return (
        <>
            <div
                className={
                    isLight
                        ? 'inside__item__container bg-light text-dark'
                        : 'inside__item__container bg-dark text-light'
                }
                onClick={localOverturnHandler}
            >
                {!localOverturn ? (
                    <CurrentItem
                        {...(getImage ? { getImage: getImage } : {})}
                        index={index}
                        isLight={isLight}
                        itemObj={cuIte}
                    />
                ) : (
                    <Backside index={index} itemObj={cuIte} isLight={isLight} />
                )}
            </div>
        </>
    )
}
