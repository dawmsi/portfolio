import React from 'react'
import { BacksideItem } from '../../components/BacksideItem/BacksideItem'
import { CarouselArea } from '../../components/CarouselArea'
import { ProjectItem } from '../../components/ProjectItem'
import { projects } from './projectTempArray'

export const Projects = ({ isLight }) => {
    return (
        <>
            <CarouselArea
                itemsArray={projects}
                isLight={isLight}
                CurrentItem={ProjectItem}
                BacksideItem={BacksideItem}
            />
        </>
    )
}
