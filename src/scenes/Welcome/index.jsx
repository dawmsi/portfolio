import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { projects } from '../../data/projectTempArray'
import { skills } from '../../data/skillsTempArray'
import './Welcome.scss'

export const Welcome = ({ isLight }) => {
    const [searchString, setSearchString] = useState('')
    const [btnsObj, setBtnsObj] = useState({})
    const [navsObj, setNavsObj] = useState({})

    useEffect(() => {
        setBtnsObj(
            skills
                .map((skill) => {
                    return {
                        id: skill.id,
                        name: skill.name,
                        dependencies: skill.dependencies.map((dep) => {
                            return dep.name
                        }),
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

    useEffect(() => {
        setNavsObj(
            projects
                .map((project) => {
                    return {
                        id: project.id,
                        name: project.name,
                        details: project.details
                    }
                })
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
            <div className="welcome__row">
                <Form.Group
                    className="welcome__search__container"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        autoFocus
                        value={searchString}
                        className={
                            isLight
                                ? 'welcome__search bg-light text-dark'
                                : 'welcome__search bg-dark text-light'
                        }
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
                    className="welcome__btns__group"
                    type="checkbox"
                >
                    {Object.keys(btnsObj).map((btnID) => (
                        <ToggleButton
                            key={btnsObj[btnID].id}
                            variant={isLight ? 'light' : 'dark'}
                            /* id={`tbg-btn-${btnsObj[btnID].id}`} */
                            /* value={btnsObj[btnID].id} */
                            className={
                                btnsObj[btnID].checked ||
                                btnsObj[btnID].name
                                    .toLowerCase()
                                    .includes(searchString.toLowerCase()) ===
                                    false
                                    ? 'skill__btn hide'
                                    : 'skill__btn'
                            }
                            onClick={() =>
                                setBtnsObj((prevObj) => {
                                    prevObj[btnID].checked =
                                        !prevObj[btnID].checked
                                    return { ...prevObj }
                                })
                            }
                            draggable
                            onDragStart={(e) => {
                                e.dataTransfer.setData('id', btnID)
                            }}
                        >
                            <div className="skillName">
                                {btnsObj[btnID].name}
                            </div>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div className="welcome__row">
                <Card.Title>Your Welcome</Card.Title>
                <Card.Text className="text-center">
                    Here you can check if the developer <wbr /> has the
                    necessary skills for your projects
                </Card.Text>
            </div>
            <div
                className="welcome__row drop__area"
                style={{
                    borderColor: isLight ? 'dark' : 'light',
                    backgroundColor: isLight
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'rgba(50, 50, 50, 0.2)'
                }}
                onDragOver={(e) => {
                    e.preventDefault(e)
                }}
                onDrop={(e) => {
                    const id = e.dataTransfer.getData('id')
                    setBtnsObj((prevObj) => {
                        prevObj[id].checked = !prevObj[id].checked
                        return { ...prevObj }
                    })
                }}
            >
                <Form.Text className={isLight ? 'text-light' : 'text-dark'}>
                    Click or drag here the skill field here <br /> to filter
                    projects!
                </Form.Text>
                <ToggleButtonGroup
                    className="welcome__btns__group"
                    type="checkbox"
                >
                    {Object.keys(btnsObj).map((btnID) => (
                        <ToggleButton
                            key={btnsObj[btnID].id}
                            variant={isLight ? 'light' : 'dark'}
                            /* id={`tbg-btn-${btnsObj[btnID].id}`} */
                            /* value={btnsObj[btnID].id} */
                            className={
                                btnsObj[btnID].checked
                                    ? 'skill__btn'
                                    : 'skill__btn hide'
                            }
                            onClick={() =>
                                setBtnsObj((prevObj) => {
                                    prevObj[btnID].checked =
                                        !prevObj[btnID].checked
                                    return { ...prevObj }
                                })
                            }
                        >
                            <div className="skillName">
                                {btnsObj[btnID].name}
                            </div>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div className="welcome__row">
                <ToggleButtonGroup
                    className="welcome__btns__group project__group"
                    type="checkbox"
                >
                    {Object.keys(navsObj).map((projectID) => (
                        <ToggleButton
                            key={navsObj[projectID].id}
                            variant={isLight ? 'light' : 'dark'}
                            className={
                                Object.keys(btnsObj)
                                    .filter(
                                        (skillID) => btnsObj[skillID].checked
                                    )
                                    .map((skillID) => {
                                        let temp = btnsObj[skillID].dependencies
                                            .map((dep) => {
                                                return navsObj[
                                                    projectID
                                                ].details
                                                    .toLowerCase()
                                                    .includes(dep.toLowerCase())
                                            })
                                            .reduce((check, item) => {
                                                return check || item
                                            }, false)
                                        return temp
                                    })
                                    .reduce((check, item) => {
                                        return check && item
                                    }, true) === true
                                    ? 'project__nav'
                                    : 'project__nav hide'
                            }
                        >
                            <NavLink
                                to={'/portfolio/projects'}
                                className={
                                    isLight
                                        ? 'projectName link-dark'
                                        : 'projectName link-light'
                                }
                            >
                                {navsObj[projectID].name}
                            </NavLink>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
        </Card>
    )
}
