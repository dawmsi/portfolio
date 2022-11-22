import React from 'react'
import { CarouselArea } from '../../components/CarouselArea'
import { SkillsItem } from '../../components/SkillsItem/SkillsItem'
import { skills } from './skillsTempArray'

export const Skills = ({ isLight }) => {
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
