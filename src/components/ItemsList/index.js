import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './ItemsList.scss'
export const ItemsList = ({ image, CurrentItem, isLight }) => {
    return (
        <>
            <Row className='list g-3' md={3}>
                <CurrentItem image={image} />
                <CurrentItem image={image} />
                <CurrentItem image={image} />
                <CurrentItem image={image} />
                <CurrentItem image={image} />
                <CurrentItem image={image} />
            </Row>
        </>
    )
}
