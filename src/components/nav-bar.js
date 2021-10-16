import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginButton from './login-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Game
    </Nav.Link>
   
      </Nav>
);

const AuthNav = () =>  {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
