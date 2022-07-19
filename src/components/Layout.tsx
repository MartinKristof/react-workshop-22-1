import React, { ReactNode } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Navbar color="dark" dark>
      <NavbarBrand href="/">React</NavbarBrand>
    </Navbar>
    <Container className="my-5">{children}</Container>
  </>
);
