import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../scenes/About'
import { Skills } from '../scenes/Skills'
import { Projects } from '../scenes/Projects'
import { Statistic } from '../scenes/Statistic'

export const MainRoutes = ({ isCarouseled, isLight }) => {
    return (
        <Routes>
            <Route path="/portfolio/">
                <Route index element={<About isLight={isLight} />} />
                <Route path="about" element={<About isLight={isLight} />} />
                <Route path="skills" element={<Skills isLight={isLight} />} />
                <Route
                    path="projects"
                    element={
                        <Projects
                            isCarouseled={isCarouseled}
                            isLight={isLight}
                        />
                    }
                />
                <Route path="statistic" element={<Statistic />} />
            </Route>
        </Routes>
    )
}
