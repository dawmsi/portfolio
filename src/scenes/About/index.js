import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import avatarImg from './ava.JPEG'
import './About.scss'
import { ClickableButton } from '../../components/ClickableButton/ClickableButton'
import { UnclickableButton } from '../../components/UnclickableButton/UnclickableButton'

export const About = ({ isLight }) => {
    const unclickCount = 18
    const unclickBtnsArr = []

    for (let i = 0; i < unclickCount; i++) {
        unclickBtnsArr.push(
            <UnclickableButton
                key={i + 1}
                id={i + 1}
                inside="<> </>"
                isLight={isLight}
            />
        )
    }

    const [isActive, setIsActive] = useState(false)
    const handleClick = (event) => {
        setIsActive(!isActive)
    }
    return (
        <div className="center__area">
            <div
                className={
                    !isActive ? 'btns__area' : 'rotation__area btns__area '
                }
            >
                {unclickBtnsArr}
            </div>
            <div
                className={
                    isActive
                        ? 'rotation__area btns__click__area '
                        : 'btns__click__area'
                }
            >
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={6}
                    inside={'Education'}
                    isActive={isActive}
                />
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={7}
                    inside={'Some'}
                    isActive={isActive}
                />
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={5}
                    inside={'Other'}
                    isActive={isActive}
                />
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={4}
                    inside={'Hobby'}
                    isActive={isActive}
                />
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={8}
                    inside={'Courses'}
                    isActive={isActive}
                />
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={1}
                    inside={'About'}
                    isActive={isActive}
                />
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={3}
                    inside={'Insta'}
                    isActive={isActive}
                />
                <ClickableButton
                    isLight={isLight}
                    handleClick={handleClick}
                    id={2}
                    inside={'LinkIn'}
                    isActive={isActive}
                />
            </div>
            <div className="avatar__area">
                <Card
                    style={{
                        backgroundImage: `url(${avatarImg})`
                    }}
                    border={isLight ? 'light' : 'dark'}
                    className={!isActive ? 'avatar' : 'avatar hide'}
                ></Card>
            </div>
        </div>
    )
}
