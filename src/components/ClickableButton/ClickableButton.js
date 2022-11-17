import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export const ClickableButton = ({
    id,
    isLight,
    inside,
    isActive,
    setIsActive,
    part,
    type,
    setCurrentKey
}) => {
    const [isClicked, setIsClicked] = useState(false)

    const clickHandker = (e) => {
        let btn = e

        if (isActive && !isClicked) {
        } else {
            e.currentTarget.classList.toggle('clicked__btn')
            setIsClicked(!isClicked)
            if (isActive && isClicked) {
                setIsActive(false)
                setCurrentKey('avatar')
            } else {
                setIsActive(true)
                setCurrentKey(part)
            }
            setTimeout(() => {
                btn.target.classList.toggle('clicked__btn')
            }, 800)
        }
    }

    if (type === 'text')
        return (
            <>
                <Button
                    disabled={isActive && !isClicked ? true : false}
                    variant={isLight ? 'dark' : 'light'}
                    className={'clicable__btn'}
                    id={id}
                    onClick={clickHandker}
                >
                    {!isClicked ? inside : '<<'}
                </Button>
            </>
        )
    else if (type === 'social')
        return (
            <Button
                disabled={isActive && !isClicked ? true : false}
                variant={isLight ? 'dark' : 'light'}
                className={'clicable__btn'}
                id={id}
            >
                {inside}
            </Button>
        )
}
