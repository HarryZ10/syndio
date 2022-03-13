import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import SyndioLogo from '../assets/images/syndio-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const faAngleDownElement = <FontAwesomeIcon className="fa-lg" icon={faAngleDown} />

/**
 *  NavBar component
 * @returns {JSX}
 */
const NavBar = () => {
    return (
        <div>
            <Navbar className="navbar">

                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={SyndioLogo}
                            height="40"
                            className="d-inline-block align-top navbar-brand"
                        />{' '}
                    </Navbar.Brand>

                    <Nav>
                        <DropdownToggle className="dropdown" id="dropdown-basic">
                            <span id="dropdown-title">Group 1</span>
                            <span id="icon-down-arrow">{faAngleDownElement}</span>
                        </DropdownToggle>
                    </Nav>
                </Container>

            </Navbar>
        </div>
    );
}


export default NavBar;