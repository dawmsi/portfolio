import React from 'react'
import './BacksideItem.scss'
export const BacksideItem = ({ itemObj }) => {
    return (
        <div className="backside__item__container">
            <div className="backside__item">
                <p key={itemObj.id}>
                    {itemObj.details ? `${itemObj.details}` : 'no details'}
                </p>
            </div>
        </div>
    )
}
