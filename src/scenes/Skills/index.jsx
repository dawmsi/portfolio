import React from 'react'
import { CarouselArea } from '../../components/CarouselArea'
import { ItemsList } from '../../components/ItemsList'
import { SkillsItem } from '../../components/SkillsItem/SkillsItem'
import { skills } from './skillsTempArray'

export const Skills = ({ isLight }) => {
    return (
        <>
            <CarouselArea
                itemsArray={skills}
                ItemsList={ItemsList}
                CurrentItem={SkillsItem}
                isLight={isLight}
            />
        </>
    )
}
