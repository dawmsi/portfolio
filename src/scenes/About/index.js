import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import avatarImg from './ava.JPEG'
import './About.scss'
import { ClickableButton } from '../../components/ClickableButton/ClickableButton'
import { UnclickableButton } from '../../components/UnclickableButton/UnclickableButton'
import { Discord, Github, Linkedin, Telegram } from 'react-bootstrap-icons'

export const About = ({ isLight }) => {
    const unclickCount = 20
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
    const [currentKey, setCurrentKey] = useState('avatar')

    const AboutChanger = (btn) => {
        switch (btn) {
            case 'Info':
                return 'Info'
            case 'Education':
                return 'Education'
            case 'Telegram':
                return 'Telegram'
            case 'Discord':
                return 'Discord'
            case 'Hobby':
                return 'Hobby'
            case 'Courses':
                return 'Courses'
            case 'Linkedin':
                return 'Linkedin'
            case 'Github':
                return 'Github'
            default:
                return
        }
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
                    setIsActive={setIsActive}
                    id={6}
                    inside={'Education'}
                    isActive={isActive}
                    type="Education"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={7}
                    inside={<Telegram />}
                    isActive={isActive}
                    type="Telegram"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={5}
                    inside={<Discord />}
                    isActive={isActive}
                    type="Discord"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={4}
                    inside={'Hobby'}
                    isActive={isActive}
                    type="Hobby"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={8}
                    inside={'Courses'}
                    isActive={isActive}
                    type="Courses"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={1}
                    inside={<Linkedin />}
                    isActive={isActive}
                    type="Linkedin"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={3}
                    inside={<Github />}
                    isActive={isActive}
                    type="Github"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={2}
                    inside={'Info'}
                    isActive={isActive}
                    type="Info"
                    setCurrentKey={setCurrentKey}
                />
            </div>
            <div className="avatar__area">
                <Card
                    style={{
                        position: 'relative',
                        backgroundImage: `url(${avatarImg})`
                    }}
                    border={isLight ? 'light' : 'dark'}
                    className={!isActive ? 'avatar' : 'avatar hide'}
                >
                    {AboutChanger(currentKey)}
                </Card>
            </div>
        </div>
    )
}
