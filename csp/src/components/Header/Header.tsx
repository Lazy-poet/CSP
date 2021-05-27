import React from 'react'
import styles from './Header.module.css';
import logo from '../../assets/svgs/logo.svg';
import cart from '../../assets/svgs/cart.svg'
import user from '../../assets/svgs/user.svg'
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
interface Props {

}

export const Header = (props: Props) => {
    return (
        <Navbar expand="md" fixed="top" className={styles.Header}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className={styles.NavbarItems}>
                <NavLink exact to="/"><img src={logo} alt="" /></NavLink>
                <NavDropdown title="Email & Collaboration" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Privacy & Security" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Custom Solutions</Nav.Link>
                <Form inline className={styles.NavbarForm}>
                    <FormControl type="text" placeholder="Search for products" className="mr-sm-2" />
                </Form>
                <NavLink exact to="/cart"><img src={cart} alt="" /></NavLink>
                <Nav.Link href="#link"><img src={user} alt="" /> Login</Nav.Link>
            </Nav>
        </Navbar>
    )
}
