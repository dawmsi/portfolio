import React, { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './containers/Nav/Nav'
import { Main } from './containers/Main/Main'
import { Container, Row } from 'react-bootstrap'

function App() {
    const [isLight, setIsLight] = useState(true)
    const changeTheme = () => setIsLight(!isLight)

    return (
        <div className="app">
            <Container>
                <Row className="app__row">
                    <NavBar isLight={isLight} changeTheme={changeTheme} />
                    <Main />
                </Row>
            </Container>
        </div>
    )
}

export default App
