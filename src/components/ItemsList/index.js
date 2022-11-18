import React from 'react'
import { Row } from 'react-bootstrap'
import './ItemsList.scss'
export const ItemsList = ({ itemsArray, CurrentItem, isLight }) => {
    return (
        <>
            <Row className="list">
                <CurrentItem isLight={isLight} itemObj={itemsArray} />
                <CurrentItem isLight={isLight} itemObj={itemsArray} />
                <CurrentItem isLight={isLight} itemObj={itemsArray} />
                <CurrentItem isLight={isLight} itemObj={itemsArray} />
                <CurrentItem isLight={isLight} itemObj={itemsArray} />
                <CurrentItem isLight={isLight} itemObj={itemsArray} />
            </Row>
        </>
    )
}
