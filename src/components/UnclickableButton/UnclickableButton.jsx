import React from 'react'
import { Button } from 'react-bootstrap'
import './Unclickable.scss'
export const UnclickableButton = ({ id, isLight, inside }) => {
    return (
        <>
            <Button
                disabled
                style={
                    isLight
                        ? { textShadow: '0 0 13px rgba(0, 0, 0, 0.25)' }
                        : { textShadow: '0 0 13px rgba(255, 255, 255, 0.25)' }
                }
                variant={isLight ? 'dark' : 'light'}
                className="unclickeble__btn"
                id={id}
            >
                {inside}
            </Button>
        </>
    )
}
