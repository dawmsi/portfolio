import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Fingerprint } from 'react-bootstrap-icons'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './SkillsItem.scss'

export const SkillsItem = ({ index, isLight, itemObj, overturn }) => {
    let complete = itemObj.dependencies.filter(
        (c) => c.complete === true
    ).length
    let all = itemObj.dependencies.length
    let percentage = ((complete * 100) / all).toFixed(1)
    return (
        <>
            <div className="skills__card">
                {index === 0 && (
                    <div className="hint">
                        <Fingerprint size={48} />
                    </div>
                )}
                {index === 0 ? (
                    <div className="hint__area">
                        <div className="swipe-hint swipe-horizontal">
                            <Fingerprint
                                size={48}
                                className={isLight ? 'text-dark' : 'text-light'}
                            />
                        </div>
                    </div>
                ) : index === 1 ? (
                    <div className="hint__area">
                        <div className="swipe-hint swipe-horizontal swipe-back">
                            <Fingerprint
                                size={48}
                                className={isLight ? 'text-dark' : 'text-light'}
                            />
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <div className="skills__circular__container">
                    <CircularProgressbar
                        className="skills__circular"
                        strokeWidth={2}
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            rotation: 0,
                            strokeLinecap: 'round',
                            textSize: '12px',
                            pathTransitionDuration: 0.5,
                            pathColor: isLight
                                ? `rgba(0,0,0, ${percentage / 100})`
                                : `rgba(255,255,255, ${percentage / 100})`,
                            textColor: isLight
                                ? `rgba(0,0,0, ${28 / 100})`
                                : `rgba(255,255,255, ${21 / 100})`,
                            trailColor: 'gray',
                            backgroundColor: 'gray'
                        })}
                    />
                </div>
                <div className="skills__body">
                    <div className="skills__title">{itemObj.name}</div>
                    <ProgressBar className="skills__progress">
                        <ProgressBar
                            striped
                            variant="warning"
                            now={percentage}
                            label={complete + '/' + all}
                            key={1}
                        />
                        <ProgressBar
                            striped
                            variant={isLight ? 'dark' : 'info'}
                            now={100 - Math.round(percentage)}
                            key={2}
                        />
                    </ProgressBar>
                </div>
            </div>
        </>
    )
}
