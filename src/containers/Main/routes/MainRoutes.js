import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../../../scenes/About'
import { Skills } from '../../../scenes/Skills'
import { Projects } from '../../../scenes/Projects'
import { Statistic } from '../../../scenes/Statistic'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/statistic" element={<Statistic />} />
        </Routes>
    )
}
