import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import HeaderDropdowns from './api/GetHeaderDropdowns';
import SyndioLogo from '../assets/images/syndio-logo.svg';


const faAngleDownElement = <FontAwesomeIcon className="fa-lg" icon={faAngleDown} />

/**
 *  NavBar component
 * @returns {JSX}
 */
const NavBar = () => {

    const dropdownData = HeaderDropdowns();

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
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                                <span id="dropdown-title">Group 1</span>
                                <span id="icon-down-arrow">{faAngleDownElement}</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {dropdownData && dropdownData.map(dropdown => (
                                    <Dropdown.Item key={dropdown.id}>{dropdown.label}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                    </Dropdown>
                    </Nav>
                </Container>

            </Navbar>
        </div>
    );
}


export default NavBar;