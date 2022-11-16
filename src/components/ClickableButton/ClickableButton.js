import React, { useState } from 'react'
import { useRef } from 'react'
import { Button } from 'react-bootstrap'
export const ClickableButton = ({
    id,
    isLight,
    inside,
    isActive,
    setIsActive
}) => {
    const [isClicked, setIsClicked] = useState(false)

    const clickHandker = (e) => {
        if (isActive && !isClicked) {
        } else if (isActive && isClicked) {
            e.currentTarget.classList.toggle('clicked__btn')
            setIsClicked(!isClicked)
            setIsActive(false)
            let btn = e
            setTimeout(() => {
                btn.target.classList.toggle('clicked__btn')
            }, 1000)
        } else {
            e.currentTarget.classList.toggle('clicked__btn')
            setIsClicked(!isClicked)
            setIsActive(true)
            let btn = e
            setTimeout(() => {
                btn.target.classList.toggle('clicked__btn')
            }, 1000)
        }
    }

    return (
        <>
            <Button
                disabled={isActive && !isClicked ? true : false}
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
