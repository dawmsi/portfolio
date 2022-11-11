import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { NavBar } from './containers/NavBar'
import { Main } from './containers/Main'
import { Container, Row } from 'react-bootstrap'

function App() {
    const [isLight, setIsLight] = useState(true)
    const changeTheme = () => setIsLight(!isLight)

    return (
        <div className="app">
            <Container>
                <Row className="app__row">
                    <Main isLight={isLight} />
                    <NavBar isLight={isLight} changeTheme={changeTheme} />
                </Row>
            </Container>
        </div>
    )
}

export default App
