import React from 'react'
import './ItemsList.scss'
export const ItemsList = ({ itemObj }) => {
    console.log(itemObj)
    return (
        <div className="list__container">
            <div className="list">
                <p key={itemObj.id}>
                    {itemObj.details ? `${itemObj.details}` : 'no details'}
                </p>
            </div>
        </div>
    )
}
