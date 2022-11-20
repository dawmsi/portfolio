import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { About } from '../scenes/About'
import { Skills } from '../scenes/Skills'
import { Projects } from '../scenes/Projects'
import { Statistic } from '../scenes/Statistic'
import { Welcome } from '../scenes/Welcome'
import { Main } from '../containers/Main'

export const MainRoutes = ({ isLight }) => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/portfolio" replace />} />
            <Route path="/portfolio" element={<Main isLight={isLight} />}>
                <Route index element={<Welcome isLight={isLight} />} />

                <Route
                    path="about"
                    element={<About isLight={isLight} />}
                    anima
                />
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
