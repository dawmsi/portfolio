import React from 'react'
import { Form, ToggleButton } from 'react-bootstrap'
import { CheckCircle, Circle } from 'react-bootstrap-icons'
import './ItemsList.scss'
export const ItemsList = ({ itemObj, isLight }) => {
    return (
        <div className="list__container">
            <div className="list">
                <div className="list__item" key={itemObj.id}>
                    {itemObj.dependencies &&
                        itemObj.dependencies.map((skill) => (
                            <Form key={skill.id} className="list__form">
                                <ToggleButton
                                    disabled
                                    style={{ backgroundColor: 'transparent' }}
                                    id="toggle-check"
                                    type="checkbox"
                                    variant={isLight ? 'light' : 'dark'}
                                    checked={skill.complete}
                                    value="1"
                                >
                                    {skill.complete ? (
                                        <CheckCircle />
                                    ) : (
                                        <Circle />
                                    )}
                                </ToggleButton>
                                <Form.Control
                                    disabled
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderRadius: '23px'
                                    }}
                                    type="text"
                                    placeholder={skill.name}
                                />
                            </Form>
                        ))}
                </div>
            </div>
        </div>
    )
}
