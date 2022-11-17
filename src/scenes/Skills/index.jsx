import React from 'react'
import { CarouselArea } from '../../components/CarouselArea'
import { SkillsItem } from '../../components/SkillsItem/SkillsItem'

export const Skills = ({ isLight }) => {
    return (
        <>
            <CarouselArea
                CurrentItem={SkillsItem}
                isLight={isLight}
                itemName={'html'}
            />
        </>
    )
}
