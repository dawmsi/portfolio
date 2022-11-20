import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { NavBar } from './containers/NavBar'
import { Row } from 'react-bootstrap'
import { MainRoutes } from './routes/MainRoutes'

function App() {
    const [isLight, setIsLight] = useState(true)
    const changeTheme = () => setIsLight(!isLight)

    return (
        <div className="app">
            <Row className="app__row">
                <MainRoutes isLight={isLight}></MainRoutes>
                <NavBar isLight={isLight} changeTheme={changeTheme} />
            </Row>
        </div>
    )
}

export default App
