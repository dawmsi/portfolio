import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { About } from '../scenes/About'
import { Skills } from '../scenes/Skills'
import { Projects } from '../scenes/Projects'
import { Statistic } from '../scenes/Statistic'
import { Welcome } from '../scenes/Welcome'

export const MainRoutes = ({ isLight }) => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/portfolio" replace />} />
            <Route path="portfolio" element={<Welcome isLight={isLight} />} />
            <Route path="portfolio/*">
                <Route path="about" element={<About isLight={isLight} />} />
                <Route path="skills" element={<Skills isLight={isLight} />} />
                <Route
                    path="projects"
                    element={<Projects isLight={isLight} />}
                />
                <Route path="statistic" element={<Statistic />} />
            </Route>
        </Routes>
    )
}
