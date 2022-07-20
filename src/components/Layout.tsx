import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Container, Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { useAuth } from '../hooks/useAuth';

export const Layout: React.FC = () => {
  const { getUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logOut();
    navigate('/');
  };

  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">React</NavbarBrand>
        {getUser() && (
          <NavbarText>
            <Button onClick={handleClick}>Logout</Button>
          </NavbarText>
        )}
      </Navbar>
      <Container className="my-5">
        <Outlet />
      </Container>
    </>
  );
};
