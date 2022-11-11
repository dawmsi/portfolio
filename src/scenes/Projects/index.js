import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { CarouselArea } from '../../components/CarouselArea'
import { CurrentItem } from '../../components/CurrentItem'
import { ItemsList } from '../../components/ItemsList'
export const Projects = ({ isCarouseled, isLight }) => {
    return (
        <>
            {isCarouseled ? (
                <CarouselArea
                    isLight={isLight}
                    image="https://www.site-shot.com/cached_image/Q7a_JmGiEe2ObwJCrBEAAw"
                    CurrentItem={CurrentItem}
                    pause="hover"
                />
            ) : (
                <Container>
                    <Row md={3}>
                        <ItemsList
                            isLight={isLight}
                            CurrentItem={CurrentItem}
                        ></ItemsList>
                    </Row>
                </Container>
            )}
        </>
    )
}
