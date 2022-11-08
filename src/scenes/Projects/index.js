import React from 'react'
import { CarouselArea } from '../../components/CarouselArea'
import { Projectitem } from '../../components/ProjectItem'
export const Projects = ({ isLight }) => {
    return (
        <>
            <CarouselArea
                CurrentItem={Projectitem}
                pause="hover"
                isLight={isLight}
            />
        </>
    )
}
