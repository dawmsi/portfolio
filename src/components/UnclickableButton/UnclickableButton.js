import React from 'react'
import { Button } from 'react-bootstrap'
export const UnclickableButton = ({ id, isLight, inside }) => {
    return (
        <>
            <Button
                disabled
                variant={isLight ? 'dark' : 'light'}
                className="about__btn"
                id={id}
            >
                {inside}
            </Button>
        </>
    )
}
