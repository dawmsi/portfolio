import React, { useState } from 'react'
import { useRef } from 'react'
import { Button } from 'react-bootstrap'
export const ClickableButton = ({
    id,
    isLight,
    inside,
    isActive,
    handleClick
}) => {
    const [isClicked, setIsClicked] = useState(false)

    const clickHandker = (e) => {
        if (isActive && !isClicked) {
        } else if (isActive && isClicked) {
            e.currentTarget.classList.toggle('clicked__btn')
            setIsClicked(!isClicked)
            handleClick()
            let btn = e
            setTimeout(() => {
                btn.target.classList.toggle('clicked__btn')
            }, 1000)
        } else {
            e.currentTarget.classList.toggle('clicked__btn')
            setIsClicked(!isClicked)
            handleClick()
            let btn = e
            setTimeout(() => {
                btn.target.classList.toggle('clicked__btn')
            }, 1000)
        }
    }

    return (
        <>
            <Button
                variant={isLight ? 'dark' : 'light'}
                className={'clicable__btn'}
                id={id}
                onClick={clickHandker}
                inside={inside}
            >
                {!isClicked ? inside : 'Avatar'}
            </Button>
        </>
    )
}
