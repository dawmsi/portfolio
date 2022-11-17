import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const SkillsItem = ({ isLight, itemObj }) => {
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
            </div>
            <div
                style={{ textAlign: 'center', fontSize: '26px', height: '20%' }}
            >
                {itemObj.name}
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
        </>
    )
}
