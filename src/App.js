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
                    <NavBar isLight={isLight} changeTheme={changeTheme} />
                    <Main isLight={isLight} />
                </Row>
            </Container>
        </div>
    )
}

export default App
