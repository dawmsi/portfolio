import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './SkillsItem.scss'

export const SkillsItem = ({ isLight, itemObj }) => {
    return (
        <>
            <div className="skills__card">
                <CircularProgressbar
                    className="skills__circular"
                    strokeWidth={2}
                    value={itemObj.complete}
                    text={`${itemObj.complete}%`}
                    styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: 'round',
                        textSize: '12px',
                        pathTransitionDuration: 0.5,
                        pathColor: isLight
                            ? `rgba(0,0,0, ${itemObj.complete / 100})`
                            : `rgba(255,255,255, ${itemObj.complete / 100})`,
                        textColor: isLight
                            ? `rgba(0,0,0, ${itemObj.complete / 100})`
                            : `rgba(255,255,255, ${itemObj.complete / 100})`,
                        trailColor: 'gray',
                        backgroundColor: 'gray'
                    })}
                />

                <div className="skills__body">
                    <div className="skills__title">{itemObj.name}</div>
                    <ProgressBar className="skills__progress">
                        <ProgressBar
                            striped
                            variant="warning"
                            now={itemObj.complete}
                            label={itemObj.complete}
                            key={1}
                        />
                        <ProgressBar
                            striped
                            variant={isLight ? 'dark' : 'info'}
                            label={100 - itemObj.complete}
                            now={100 - itemObj.complete}
                            key={2}
                        />
                    </ProgressBar>
                </div>
            </div>
        </>
    )
}
