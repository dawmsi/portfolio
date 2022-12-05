import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import avatarImg from './ava.jpeg'
import './About.scss'
import { ClickableButton } from '../../components/ClickableButton/ClickableButton'
import { UnclickableButton } from '../../components/UnclickableButton/UnclickableButton'
import { Discord, Github, Linkedin, Telegram } from 'react-bootstrap-icons'

export const About = ({ isLight }) => {
    const unclickCount = 38
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
                return (
                    <p className="show__effect">
                        Hello <br /> my name is <br /> Denys
                    </p>
                )
            case 'Education':
                return (
                    <p>
                        I graduated <br /> from university <br /> with a
                        master's degree <br /> in software <br /> engineering
                    </p>
                )
            case 'Hobby':
                return (
                    <p>
                        Write music, <br /> Running
                    </p>
                )
            case 'Courses':
                return (
                    <p>
                        Front-end development passed in the company of SkillUp
                    </p>
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
                        ? 'rotation__area btns__click__area'
                        : 'btns__click__area'
                }
            >
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={1}
                    inside={'Education'}
                    isActive={isActive}
                    type="text"
                    part="Education"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={2}
                    inside={
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://t.me/DAoFFl"
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
                    id={3}
                    inside={
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://discordapp.com/users/dawmsi#0895"
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
                    id={5}
                    inside={'Courses'}
                    isActive={isActive}
                    type="text"
                    part="Courses"
                    setCurrentKey={setCurrentKey}
                />
                <ClickableButton
                    isLight={isLight}
                    setIsActive={setIsActive}
                    id={6}
                    inside={
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/dawmsi/"
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
                    id={7}
                    inside={
                        <a
                            target="_blank"
                            rel="noreferrer"
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
                    id={8}
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
                    className={!isActive ? 'avatar' : 'avatar hide__avatar'}
                >
                    <div className="ava__centre">
                        <div
                            className={
                                isActive
                                    ? 'text__centre show__effect'
                                    : 'text__centre'
                            }
                        >
                            {AboutChanger(currentKey)}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
