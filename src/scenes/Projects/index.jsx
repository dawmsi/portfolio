import React from 'react'
import { CarouselArea } from '../../components/CarouselArea'
import { ProjectItem } from '../../components/ProjectItem'
export const Projects = ({ isLight }) => {
    const projects = [
        {
            id: 1,
            name: 'Modest',
            description:
                'Blog site, flex-box styling, google map, contact form',
            link: 'https://dawmsi.github.io/blog-project/',
            details: 'Blog site, flex-box styling, google map, contact form'
        },
        {
            id: 2,
            name: 'Weather',
            description:
                'search by city, practice clear js, fetch, work with API, ',
            link: 'https://dawmsi.github.io/weather/',
            details: 'search by city, practice clear js, fetch, work with API, '
        }
    ]
    return (
        <>
            <CarouselArea
                itemsArray={projects}
                isLight={isLight}
                CurrentItem={ProjectItem}
            />
        </>
    )
}
