import React from 'react'
import { Button } from 'react-bootstrap'
import './Unclickable.scss'
export const UnclickableButton = ({ id, isLight, inside }) => {
    return (
        <>
            <Button
                disabled
                variant={isLight ? 'dark' : 'light'}
                className="unclickeble__btn"
                id={id}
            >
                {inside}
            </Button>
        </>
    )
}
