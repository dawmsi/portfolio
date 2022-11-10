import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../scenes/About'
import { Skills } from '../scenes/Skills'
import { Projects } from '../scenes/Projects'
import { Statistic } from '../scenes/Statistic'

export const MainRoutes = ({ isCarouseled, isLight }) => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<About />} />
                <Route path="skills" element={<Skills isLight={isLight} />} />
                <Route
                    path="projects"
                    element={<Projects isCarouseled={isCarouseled} isLight={isLight} />}
                />
                <Route path="statistic" element={<Statistic />} />
            </Route>
        </Routes>
    )
}
