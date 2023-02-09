import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export const NavButton = ({ isLight, to, children }) => {
    return (
        <div className="flex-fill" key={to}>
            <Nav.Link as={NavLink} to={to}>
                <Button variant={isLight ? 'light' : 'dark'}>{children}</Button>
            </Nav.Link>
        </div>
    )
}
