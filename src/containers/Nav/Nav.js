import React, { useState } from 'react'
import { Container, Navbar, Nav, Button, Collapse, Row } from 'react-bootstrap'
import {} from 'react-bootstrap-icons'
import { Item } from '../../components/NavItem/NavItem'
import './Nav.scss'
export const NavBar = ({ isLight, changeTheme }) => {
    return (
        <>
            <Navbar expand="sm" variant="dark" bg="light" className="mb-2">
                <Container>
                    <Nav>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
