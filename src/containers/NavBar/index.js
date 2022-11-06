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
                    <Nav fill navbarScroll={true} variant="pills">
                        <Nav.Link as={Link} to={''}>
                            <Button variant="light">About</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'skills'}>
                            <Button variant="light">Skills</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'projects'}>
                            <Button variant="light">Projects</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'statistic'}>
                            <Button variant="light">Statistic</Button>
                        </Nav.Link>
                        <Nav.Item className="px-8">
                            <Button variant="light">
                                <Moon />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
