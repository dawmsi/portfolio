import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import './NavItem.scss'

export const Item = ({ Icon }) => {
    return (
        <Button variant="light">
            <Nav.Link href="#action1">{Icon}</Nav.Link>
        </Button>
    )
}
