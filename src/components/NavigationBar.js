import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    width: 100vw!important;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sweet Recipes</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link>
            <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/login">Login</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/createrecipes">Create Recipes</Link>
        </Nav.Link>
    </Nav>
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar>
  </Styles>
);

