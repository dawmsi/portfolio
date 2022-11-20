import React from 'react'
import { CarouselArea } from '../../components/CarouselArea'
import { SkillsItem } from '../../components/SkillsItem/SkillsItem'

export const Skills = ({ isLight }) => {
    const skills = [
        {
            id: 1,
            name: 'HTML',
            complete: 80,
            details: `, Tutorial , HOME , Introduction , Editors ,
        Basic , Elements , Attributes , Headings ,
        Paragraphs , Styles , Formatting , Quotations ,
        Comments , Colors , CSS , Links , Images ,
        Favicon , Tables , Lists , Block & Inline ,
        Classes , Id , Iframes , JavaScript , File Paths
        , Head , Layout , Responsive , Computercode ,
        Semantics , Style Guide , Entities , Symbols ,
        Emojis , Charset , URL Encode , vs. XHTML ,
        Forms , Forms , Form Attributes , Form Elements
        , Input Types , Input Attributes , Input Form
        Attributes , Graphics , Canvas , SVG , Media
        , Media , Video , Audio , Plug-ins , YouTube
        , APIs , Geolocation , Drag/Drop , Web Storage
        , Web Workers , SSE , Examples , Examples ,
        Quiz , Exercises , Certificate , Summary ,
        Accessibility , References , Tag List , Attributes
        , Global Attributes , Browser Support , Events ,
        Colors , Canvas , Audio/Video , Doctypes ,
        Character Sets , URL Encode , Lang Codes HTTP Messages
        HTTP Methods PX to EM Converter Keyboard Shortcuts`
        },
        {
            id: 2,
            name: 'CSS',
            complete: 60
        },
        { id: 3, name: 'JAVASCRIPT', complete: 88 },
        { id: 4, name: 'Material UI', complete: 67 },
        { id: 5, name: 'Bootstrap', complete: 68 },
        { id: 6, name: 'SA(C)SS', complete: 70 },
        { id: 7, name: 'React', complete: 71 },
        { id: 8, name: 'Redux', complete: 72 },
        { id: 9, name: 'NodeJS', complete: 82 }
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
