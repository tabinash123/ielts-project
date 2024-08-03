import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  padding: 1.4rem;
  position: relative;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  color: red;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.li`
  margin-left: 1.5rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #8B4513;
    }
  }
`;

const MobileMenuButton = styled.button`
  background: 1px solid #eeeeee;
  border: none;
  color: #000000;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  
  top: 100%;
  left: 0;
  right: 0;
  background-color: orange;
  padding: 1rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MobileNavLink = styled.li`
  margin-bottom: 1rem;

  a {
    color: #000000;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #8B4513;
    }
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo href="/">Tattoo Studio</Logo>
        <NavLinks>
          <NavLink><a href="/">Home</a></NavLink>
          <NavLink><a href="/about">About Us</a></NavLink>
          <NavLink><a href="/contact">Contact</a></NavLink>
          <NavLink><a href="/gallery">Photo Gallery</a></NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavbarContent>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          <MobileNavLink><a href="/" onClick={toggleMobileMenu}>Home</a></MobileNavLink>
          <MobileNavLink><a href="/about" onClick={toggleMobileMenu}>About Us</a></MobileNavLink>
          <MobileNavLink><a href="/contact" onClick={toggleMobileMenu}>Contact</a></MobileNavLink>
          <MobileNavLink><a href="/gallery" onClick={toggleMobileMenu}>Photo Gallery</a></MobileNavLink>
        </MobileNavLinks>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;