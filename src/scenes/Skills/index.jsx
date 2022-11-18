import React from 'react'
import { CarouselArea } from '../../components/CarouselArea'
import { SkillsItem } from '../../components/SkillsItem/SkillsItem'

export const Skills = ({ isLight }) => {
    const skills = [
        { id: 1, name: 'HTML', complete: 80 },
        {
            id: 2,
            name: 'CSS',
            complete: 60
        },
        { id: 3, name: 'SLEEP', complete: 100 }
    ]

    return (
        <>
            <CarouselArea
                itemsArray={skills}
                CurrentItem={SkillsItem}
                isLight={isLight}
                itemName={'html'}
            />
        </>
    )
}
