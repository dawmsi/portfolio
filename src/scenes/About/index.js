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
            case 'Hobby':
                return 'Hobby'
            case 'Courses':
                return 'Courses'

            case 'Telegram':
                return (
                    <a
                        className={isLight ? 'link-dark' : 'link-light'}
                        href="https://t.me"
                    >
                        <Telegram />
                    </a>
                )
            case 'Discord':
                return (
                    <a
                        className={isLight ? 'link-dark' : 'link-light'}
                        href="https://t.me"
                    >
                        <Discord />
                    </a>
                )

            case 'Linkedin':
                return (
                    <a
                        className={isLight ? 'link-dark' : 'link-light'}
                        href="https://t.me"
                    >
                        <Linkedin />
                    </a>
                )
            case 'Github':
                return (
                    <a
                        className={isLight ? 'link-dark' : 'link-light'}
                        href="https://t.me"
                    >
                        <Github />
                    </a>
                )
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
                    type="text"
                    part="Education"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={7}
                    inside={
                        <a
                            href="https://t.me"
                            className={isLight ? 'link-light' : 'link-dark'}
                        >
                            <Telegram />
                        </a>
                    }
                    isActive={isActive}
                    type="social"
                    part="Telegram"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={5}
                    inside={
                        <a
                            href="https://discord.com/"
                            className={isLight ? 'link-light' : 'link-dark'}
                        >
                            <Discord />
                        </a>
                    }
                    isActive={isActive}
                    type="social"
                    part="Discord"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={4}
                    inside={'Hobby'}
                    isActive={isActive}
                    type="text"
                    part="Hobby"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={8}
                    inside={'Courses'}
                    isActive={isActive}
                    type="text"
                    part="Courses"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={1}
                    inside={
                        <a
                            href="https://ua.linkedin.com/"
                            className={isLight ? 'link-light' : 'link-dark'}
                        >
                            <Linkedin />
                        </a>
                    }
                    isActive={isActive}
                    type="social"
                    part="Linkedin"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={3}
                    inside={
                        <a
                            href="https://github.com/dawmsi"
                            className={isLight ? 'link-light' : 'link-dark'}
                        >
                            <Github />
                        </a>
                    }
                    isActive={isActive}
                    type="social"
                    part="Github"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={2}
                    inside={'Info'}
                    isActive={isActive}
                    type="text"
                    part="Info"
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
                    <div className="ava__centre">
                        {AboutChanger(currentKey)}
                    </div>
                </Card>
            </div>
        </div>
    )
}
