import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
export const ClickableButton = ({
    id,
    isLight,
    inside,
    isActive,
    handleClick,
    flag
}) => {
    const [isClicked, setIsClicked] = useState(false)

    const clickHandker = (e) => {
        if (isActive && !isClicked) {
        } else {
            setIsClicked(!isClicked)
            handleClick()
        }
    }
    return (
        <>
            <Button
                variant={isLight ? 'dark' : 'light'}
                className={!isClicked ? 'clicable__btn' : 'scaled__btn btn'}
                id={id}
                onClick={clickHandker}
                inside={inside}
            >
                {inside}
            </Button>
        </>
    )
}
