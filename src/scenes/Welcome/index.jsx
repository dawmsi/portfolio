import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { skills } from '../../data/skillsTempArray'
import './Welcome.scss'

export const Welcome = ({ isLight }) => {
    const [searchString, setSearchString] = useState('')
    const [btnsObj, setBtnsObj] = useState({})

    useEffect(() => {
        setBtnsObj(
            skills
                .map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                        checked: false
                    }
                })
                /*                 .filter((skillName) =>
                    searchString
                        ? skillName.name
                              .toLowerCase()
                              .includes(searchString.toLowerCase())
                        : true
                ) */
                .reduce(
                    (obj, item) => ({
                        ...obj,
                        [item.id]: item
                    }),
                    {}
                )
        )
    }, [])

    return (
        <Card
            style={
                isLight
                    ? { textShadow: '0 0 13px rgba(0, 0, 0, 0.25)' }
                    : { textShadow: '0 0 13px rgba(255, 255, 255, 0.25)' }
            }
            bg="transparent"
            className={
                isLight ? 'welcome__area text-light' : 'welcome__area text-dark'
            }
        >
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        autoFocus
                        value={searchString}
                        className={
                            isLight
                                ? 'bg-light text-dark'
                                : 'bg-dark text-light'
                        }
                        style={{
                            borderRadius: '23px',
                            border: 'none',
                            textAlign: 'center',
                            boxShadow: '0px 0px 8px 4px rgb(0 0 0 / 25%)'
                        }}
                        type="text"
                        placeholder="Enter skill"
                        onBlur={() =>
                            setTimeout(() => {
                                setSearchString('')
                            }, 8)
                        }
                        onChange={(e) => setSearchString(e.target.value)}
                    />
                </Form.Group>
                <ToggleButtonGroup
                    style={{
                        width: '300px',
                        overflowX: 'scroll',
                        marginBottom: '12px'
                    }}
                    type="checkbox"
                >
                    {Object.keys(btnsObj).map((btnID) => (
                        <ToggleButton
                            key={btnsObj[btnID].id}
                            style={{
                                borderRadius: '23px'
                            }}
                            variant={isLight ? 'light' : 'dark'}
                            id={`tbg-btn-${btnsObj[btnID].id}`}
                            value={btnsObj[btnID].id}
                            className={
                                btnsObj[btnID].checked ||
                                btnsObj[btnID].name
                                    .toLowerCase()
                                    .includes(searchString.toLowerCase()) ===
                                    false
                                    ? 'hide'
                                    : ''
                            }
                            onClick={() =>
                                setBtnsObj((prevObj) => {
                                    prevObj[btnID].checked =
                                        !prevObj[btnID].checked
                                    return { ...prevObj }
                                })
                            }
                        >
                            <div
                                className="skillName"
                                style={{
                                    width: 'max-content',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {btnsObj[btnID].name}
                            </div>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div>
                <Card.Title>Your Welcome</Card.Title>
                <Card.Text className="text-center">
                    Here you can check if the developer <br /> has the necessary
                    skills for your projects
                </Card.Text>
            </div>
            <div
                style={{
                    minHeight: '40px',
                    border: '2px dashed',
                    borderColor: isLight ? 'dark' : 'light',
                    borderRadius: '23px',
                    padding: '12px',
                    backgroundColor: isLight
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'rgba(50, 50, 50, 0.2)',
                    width: '330px'
                }}
            >
                <Form.Text className={isLight ? 'text-light' : 'text-dark'}>
                    Choose the skills you are looking for in templates
                </Form.Text>
                <ToggleButtonGroup
                    style={{
                        width: '300px',
                        overflowX: 'scroll',
                        margin: '12px 0'
                    }}
                    type="checkbox"
                >
                    {Object.keys(btnsObj).map((btnID) => (
                        <ToggleButton
                            key={btnsObj[btnID].id}
                            style={{
                                borderRadius: '23px'
                            }}
                            variant={isLight ? 'light' : 'dark'}
                            id={`tbg-btn-${btnsObj[btnID].id}`}
                            value={btnsObj[btnID].id}
                            className={btnsObj[btnID].checked ? '' : 'hide'}
                            onClick={() =>
                                setBtnsObj((prevObj) => {
                                    prevObj[btnID].checked =
                                        !prevObj[btnID].checked
                                    return { ...prevObj }
                                })
                            }
                        >
                            <div
                                className="skillName"
                                style={{
                                    fontSize: '0.8rem'
                                }}
                            >
                                {btnsObj[btnID].name}
                            </div>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
        </Card>
    )
}
