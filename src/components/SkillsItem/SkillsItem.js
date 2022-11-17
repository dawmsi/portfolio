import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const SkillsItem = ({ isLight, itemName }) => {
    const percentage = 69

    return (
        <>
            <div style={{ padding: '22px' }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: 'round',
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: isLight
                            ? `rgba(0,0,0, ${percentage / 100})`
                            : `rgba(255,255,255, ${percentage / 100})`,
                        textColor: isLight
                            ? `rgba(0,0,0, ${percentage / 100})`
                            : `rgba(255,255,255, ${percentage / 100})`,
                        trailColor: 'gray',
                        backgroundColor: 'gray'
                    })}
                />
            </div>
            <div style={{ textAlign: 'center', fontSize: '26px' }}>
                {itemName}
            </div>
        </>
    )
}
