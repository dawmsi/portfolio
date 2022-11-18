import React from 'react'

import { CarouselArea } from '../../components/CarouselArea'
import { ProjectItem } from '../../components/ProjectItem'
import { ItemsList } from '../../components/ItemsList'
export const Projects = ({ isLight }) => {
    const projects = [
        {
            id: 1,
            name: 'Modest',
            description:
                'Blog site, flex-box styling, google map, contact form',
            link: 'https://dawmsi.github.io/blog-project/',
            image: 'https://www.site-shot.com/cached_image/4di4QGacEe2oDAJCrBEAAg'
        },
        {
            id: 2,
            name: 'Weather',
            description:
                'search by city, practice clear js, fetch, work with API, ',
            link: 'https://dawmsi.github.io/weather/',
            image: 'https://www.site-shot.com/cached_image/hseRYmafEe2TkQJCrBEAAw'
        }
    ]
    return (
        <>
            <CarouselArea
                itemsArray={projects}
                isLight={isLight}
                CurrentItem={ProjectItem}
                pause="hover"
            />
        </>
    )
}
