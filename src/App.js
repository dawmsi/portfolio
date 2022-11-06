import React, { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './containers/NavBar'
import { Main } from './containers/Main/Main'
import { Container, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

function App() {
    const [isLight, setIsLight] = useState(true)
    const changeTheme = () => setIsLight(!isLight)

    return (
        <div className="app">
            <BrowserRouter>
                <Container>
                    <Row className="app__row">
                        <NavBar isLight={isLight} changeTheme={changeTheme} />
                        <Main />
                    </Row>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default App
