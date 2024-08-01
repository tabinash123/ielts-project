import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const NavbarContainer = styled.nav`
  background-color: white;
  padding: 15px 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #ff1493;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin-left: 30px;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #ff1493;
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 70%;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1001;
`;

const MobileMenuContent = styled.div`
  padding: 50px 30px;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const MobileNavLink = styled.li`
  margin-bottom: 20px;

  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #ff1493;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavContent>
        <Logo href="/">Mother's Pride</Logo>
        <NavLinks>
          <NavLink><a href="/">Home</a></NavLink>
          <NavLink><a href="/about">About</a></NavLink>
          <NavLink><a href="/programs">Programs</a></NavLink>
          <NavLink><a href="/admissions">Admissions</a></NavLink>
          <NavLink><a href="/contact">Contact</a></NavLink>
        </NavLinks>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          <MenuOutlined />
        </MobileMenuIcon>
      </NavContent>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuContent>
          <CloseButton onClick={toggleMobileMenu}>
            <CloseOutlined />
          </CloseButton>
          <MobileNavLinks>
            <MobileNavLink><a href="/" onClick={toggleMobileMenu}>Home</a></MobileNavLink>
            <MobileNavLink><a href="/about" onClick={toggleMobileMenu}>About</a></MobileNavLink>
            <MobileNavLink><a href="/programs" onClick={toggleMobileMenu}>Programs</a></MobileNavLink>
            <MobileNavLink><a href="/admissions" onClick={toggleMobileMenu}>Admissions</a></MobileNavLink>
            <MobileNavLink><a href="/contact" onClick={toggleMobileMenu}>Contact</a></MobileNavLink>
          </MobileNavLinks>
        </MobileMenuContent>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;