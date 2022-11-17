import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const SkillsItem = ({ isLight, itemName }) => {
    const percentage = 70

    return (
        <>
            <div
                style={{
                    padding: '22px',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    height: '70%'
                }}
            >
                <CircularProgressbar
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
                            ? `rgba(0,0,0, ${percentage / 100})`
                            : `rgba(255,255,255, ${percentage / 100})`,
                        trailColor: 'gray',
                        backgroundColor: 'gray'
                    })}
                />
            </div>
            <div
                style={{ textAlign: 'center', fontSize: '26px', height: '20%' }}
            >
                {itemName}
            </div>
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    height: '10%',
                    width: '50%',
                    margin: '0 auto'
                }}
            >
                <ProgressBar>
                    <ProgressBar
                        striped
                        variant="warning"
                        now={percentage}
                        key={1}
                        label="7"
                    />
                    <ProgressBar
                        striped
                        variant={isLight ? 'dark' : 'info'}
                        label="3"
                        now={30}
                        key={2}
                    />
                </ProgressBar>
            </div>
        </>
    )
}
