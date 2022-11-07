import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.scss'

import { Moon, Sun } from 'react-bootstrap-icons'

export const NavBar = ({ isLight, changeTheme }) => {
    return (
        <>
            <Navbar expand="sm" bg={isLight ? 'light' : 'dark'}>
                <Container className="flex-nowrap">
                    <Nav fill navbarScroll={true} variant="pills">
                        <Nav.Link eventKey="/about" as={Link} to={'/'}>
                            <Button variant={isLight ? 'light' : 'dark'}>
                                About
                            </Button>
                        </Nav.Link>
                        <Nav.Link eventKey="/skills" as={Link} to={'/skills'}>
                            <Button variant={isLight ? 'light' : 'dark'}>
                                Skills
                            </Button>
                        </Nav.Link>
                        <Nav.Link
                            eventKey="/projects"
                            as={Link}
                            to={'/projects'}
                        >
                            <Button variant={isLight ? 'light' : 'dark'}>
                                Projects
                            </Button>
                        </Nav.Link>
                        <Nav.Link
                            eventKey="/statistic"
                            as={Link}
                            to={'/statistic'}
                        >
                            <Button variant={isLight ? 'light' : 'dark'}>
                                Statistic
                            </Button>
                        </Nav.Link>
                    </Nav>
                    <Button
                        className="mode__button px-8"
                        variant={isLight ? 'light' : 'dark'}
                        onClick={changeTheme}
                    >
                        {isLight ? <Moon /> : <Sun />}
                    </Button>
                </Container>
            </Navbar>
        </>
    )
}
