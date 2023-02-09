import React from 'react'
import { BacksideItem } from '../../components/carouselElements/BacksideItem/BacksideItem'
import { ProjectItem } from '../../components/ProjectItem'
import { projects } from '../../data/projectTempArray'
import { CarouselArea } from '../../modules/CarouselArea'

export const Projects = ({ isLight }) => {
    return (
        <>
            <CarouselArea
                itemsArray={projects}
                isLight={isLight}
                CurrentItem={ProjectItem}
                Backside={BacksideItem}
            />
        </>
    )
}
