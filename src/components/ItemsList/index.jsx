import React from 'react'
import { Form, ToggleButton } from 'react-bootstrap'
import {
    CheckCircle,
    Circle,
    Fingerprint,
    XCircle
} from 'react-bootstrap-icons'
import './ItemsList.scss'
export const ItemsList = ({ itemObj, isLight }) => {
    return (
        <div className="list__container">
            <div className="hint__area">
                <div className="swipe-hint swipe-horizontal">
                    <Fingerprint
                        size={48}
                        className={isLight ? 'text-dark' : 'text-light'}
                    />
                </div>
            </div>
            <div className="list">
                <div className="list__item" key={itemObj.id}>
                    {itemObj.dependencies.map((skill) => (
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
                                {skill.complete ? <CheckCircle /> : <Circle />}
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
                            <ToggleButton
                                disabled
                                style={{ backgroundColor: 'transparent' }}
                                type="checkbox"
                                variant={isLight ? 'light' : 'dark'}
                            >
                                <XCircle />
                            </ToggleButton>
                        </Form>
                    ))}
                </div>
            </div>
        </div>
    )
}
