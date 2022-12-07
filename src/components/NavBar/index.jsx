import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import {
    Moon,
    Person,
    Sun,
    Diagram2,
    Grid,
    Bezier2,
    Search
} from 'react-bootstrap-icons'
export const NavBar = ({ isLight, changeTheme }) => {
    return (
        <>
            <Navbar expand="sm" bg={isLight ? 'light' : 'dark'}>
                <Container className="flex-nowrap">
                    <Nav navbarScroll={true} variant="pills">
                        <div className="flex-fill">
                            <Nav.Link
                                eventKey="/"
                                as={NavLink}
                                to={'/portfolio/'}
                            >
                                <Button variant={isLight ? 'light' : 'dark'}>
                                    <Search />
                                </Button>
                            </Nav.Link>
                        </div>
                        <div className="flex-fill">
                            <Nav.Link
                                eventKey="about"
                                as={NavLink}
                                to={`/portfolio/about`}
                            >
                                <Button variant={isLight ? 'light' : 'dark'}>
                                    <Person />
                                </Button>
                            </Nav.Link>
                        </div>
                        <div className="flex-fill">
                            <Nav.Link
                                eventKey="skills"
                                as={NavLink}
                                to={'/portfolio/skills'}
                            >
                                <Button variant={isLight ? 'light' : 'dark'}>
                                    <Diagram2 />
                                </Button>
                            </Nav.Link>
                        </div>
                        <div className="flex-fill">
                            <Nav.Link
                                eventKey="projects"
                                as={NavLink}
                                to={'/portfolio/projects'}
                            >
                                <Button variant={isLight ? 'light' : 'dark'}>
                                    <Grid />
                                </Button>
                            </Nav.Link>
                        </div>
                        <div className="flex-fill">
                            <Nav.Link
                                eventKey="statistic"
                                as={NavLink}
                                to={'/portfolio/statistic'}
                            >
                                <Button variant={isLight ? 'light' : 'dark'}>
                                    <Bezier2 />
                                </Button>
                            </Nav.Link>
                        </div>
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
