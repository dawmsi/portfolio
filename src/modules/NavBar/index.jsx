import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import './NavBar.scss'
import {
    Moon,
    Person,
    Sun,
    Diagram2,
    Grid,
/*     Bezier2, */
    Search
} from 'react-bootstrap-icons'
import { NavButton } from '../../components/NavButton'

export const NavBar = ({ isLight, changeTheme }) => {
    return (
        <>
            <Navbar expand="sm" bg={isLight ? 'light' : 'dark'}>
                <Container className="flex-nowrap">
                    <Nav navbarScroll={true} variant="pills">
                        <NavButton
                            isLight={isLight}
                            to={'/portfolio/'}
                        >
                            <Search />
                        </NavButton>
                        <NavButton
                            isLight={isLight}
                            to={`/portfolio/about`}
                        >
                            <Person />
                        </NavButton>
                        <NavButton
                            isLight={isLight}
                            to={'/portfolio/projects'}
                        >
                            <Grid />
                        </NavButton>
                        <NavButton
                            isLight={isLight}
                            to={'/portfolio/skills'}
                        >
                            <Diagram2 />
                        </NavButton>

                        {/*<div className="flex-fill">
                            <Nav.Link
                                eventKey="statistic"
                                as={NavLink}
                                to={'/portfolio/statistic'}
                            >
                                <Button variant={isLight ? 'light' : 'dark'}>
                                    <Bezier2 />
                                </Button>
                            </Nav.Link>
                        </div> */}
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
