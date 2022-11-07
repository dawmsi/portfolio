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
                    <Nav navbar fill navbarScroll={true}>
                        <Nav.Link as={Link} href="/">
                            <Button variant={isLight ? 'light' : 'dark'}>
                                About
                            </Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'/skills'}>
                            <Button variant={isLight ? 'light' : 'dark'}>
                                Skills
                            </Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'/projects'}>
                            <Button variant={isLight ? 'light' : 'dark'}>
                                Projects
                            </Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'/statistic'}>
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
