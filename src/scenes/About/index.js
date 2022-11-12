import React from 'react'
import { Card, Button } from 'react-bootstrap'
import avatarImg from './ava.JPEG'
import './About.scss'

export const About = ({ isLight }) => {
    return (
        <div className="center__area">
            <div className="btns__area">
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={6}
                >
                    Education
                </Button>
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={7}
                >
                    Some
                </Button>
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={5}
                >
                    Other
                </Button>
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={4}
                >
                    Hobby
                </Button>
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={8}
                >
                    Courses
                </Button>
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={1}
                >
                    About
                </Button>
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={3}
                >
                    Insta
                </Button>
                <Button
                    border={isLight ? 'light' : 'dark'}
                    variant={isLight ? 'dark' : 'light'}
                    className="about__btn"
                    id={2}
                >
                    LinkIn
                </Button>
            </div>
            <div className="avatar__area">
                <Card
                    style={{
                        backgroundImage: `url(${avatarImg})`
                    }}
                    border={isLight ? 'light' : 'dark'}
                    className="avatar"
                ></Card>
            </div>
        </div>
    )
}
