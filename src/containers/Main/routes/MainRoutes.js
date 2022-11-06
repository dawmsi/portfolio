import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../../../scenes/About'
import { Skills } from '../../../scenes/Skills'
import { Projects } from '../../../scenes/Projects'
import { Statistic } from '../../../scenes/Statistic'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio/" element={<About />} />
            <Route path="/portfolio/skills" element={<Skills />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/statistic" element={<Statistic />} />
        </Routes>
    )
}
