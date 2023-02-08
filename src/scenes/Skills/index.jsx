import React from 'react'
import { CarouselArea } from '../../modules/CarouselArea'
import { ItemsList } from '../../components/ItemsList'
import { SkillsItem } from '../../components/SkillsItem'
import { skills } from '../../data/skillsTempArray'

export const Skills = ({ isLight }) => {
    return (
        <>
            <CarouselArea
                itemsArray={skills}
                CurrentItem={SkillsItem}
                Backside={ItemsList}
                isLight={isLight}
            />
        </>
    )
}
