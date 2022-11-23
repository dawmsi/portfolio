import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { data } from './statistic'

export const Statistic = ({ isLight }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }}
        >
            <ResponsiveLine
                data={data}
                theme={{
                    dots: {
                        text: {
                            fill: isLight ? '#f8f9fa' : '#111111'
                        }
                    },
                    axis: {
                        fontSize: '14px',
                        ticks: {
                            line: {
                                stroke: '#111111'
                            },
                            text: {
                                fill: isLight ? '#f8f9fa' : '#111111'
                            }
                        }
                    }
                }}
                margin={{ top: 80, right: 60, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                curve="monotoneX"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 0,
                    tickPadding: 20,
                    tickRotation: 0,
                    colors: isLight ? '#f8f9fa' : '#111111',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={null}
                enableGridX={false}
                enableGridY={false}
                colors={isLight ? '#f8f9fa' : '#111111'}
                pointSize={13}
                pointColor={isLight ? '#111111' : '#f8f9fa'}
                pointBorderWidth={7}
                pointBorderColor={isLight ? '#111111' : '#f8f9fa'}
                enablePointLabel={true}
                pointLabel="y"
                pointLabelYOffset={4}
                areaOpacity={0}
                isInteractive={false}
                enableCrosshair={false}
                crosshairType="top-left"
                legends={[]}
            />
        </div>
    )
}
