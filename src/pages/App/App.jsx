import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { NavBar } from '../../modules/NavBar'
import { MainRoutes } from '../../routes/MainRoutes'

import back2 from './background2-min.jpg'

function App() {
    const [isLight, setIsLight] = useState(true)
    const changeTheme = () => setIsLight(!isLight)

    return (
        <div className="app" style={{ backgroundImage: `url(${back2})` }}>
            <div
                style={
                    isLight
                        ? {
                              backdropFilter: 'brightness(65%) blur(0.3em)',
                              WebkitBackdropFilter:
                                  'brightness(65%) blur(0.2em)'
                          }
                        : {
                              backdropFilter: 'brightness(85%) blur(0.3em)',
                              WebkitBackdropFilter:
                                  'brightness(85%) blur(0.2em)'
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
