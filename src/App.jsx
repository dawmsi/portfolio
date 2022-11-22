import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { NavBar } from './components/NavBar'
import { MainRoutes } from './routes/MainRoutes'

function App() {
    const [isLight, setIsLight] = useState(true)
    const changeTheme = () => setIsLight(!isLight)

    return (
        <div className="app">
            <div
                style={
                    isLight
                        ? {
                              backdropFilter: 'brightness(65%) blur(0.3em)',
                              WebkitBackdropFilter:
                                  'brightness(65%) blur(0.2em)'
                          }
                        : {
                              backdropFilter: 'brightness(75%) blur(0.3em)',
                              WebkitBackdropFilter:
                                  'brightness(75%) blur(0.2em)'
                          }
                }
                className="app__backdrop"
            >
                <div className="app__container">
                    <MainRoutes isLight={isLight}></MainRoutes>
                    <NavBar isLight={isLight} changeTheme={changeTheme} />
                </div>
            </div>
        </div>
    )
}

export default App
