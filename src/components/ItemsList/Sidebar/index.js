import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.scss'

import { Moon } from 'react-bootstrap-icons'

export const NavBar = ({ isLight, changeTheme }) => {
    return (
        <>
            <Navbar expand="sm" variant="dark" bg="light">
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to={''}>
                            <Button variant="light"></Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'skills'}>
                            <Button variant="light"></Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'projects'}>
                            <Button variant="light"></Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'statistic'}>
                            <Button variant="light"></Button>
                        </Nav.Link>
                        <Button variant="light">
                            <Moon />
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
