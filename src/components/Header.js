import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Phone, Facebook, Instagram, MapPin, Menu, X, Home, Info, Image, Mail } from 'lucide-react';

const HeaderWrapper = styled.header`
`;

const TopBar = styled.div`
  background-color: #FF9800;
  color: white;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TopBarItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const MainHeader = styled.div`
  padding: 15px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const MainHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: #FF6F00;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const LogoSubtitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #4CAF50;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #FF6F00;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: #FFF9C4;
  transition: right 0.3s ease;
  z-index: 1000;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #FF9800;
`;

const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MobileMenuItem = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: #FF6F00;
  padding: 15px 0;
  border-bottom: 1px solid #FFE0B2;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FFE0B2;
    padding-left: 10px;
  }
`;

const MobileMenuFooter = styled.div`
  margin-top: auto;
  padding: 20px;
  background-color: #FFE0B2;
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
`;

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { icon: <Home size={20} />, text: 'Home', path: '/', color: '#4a90e2' },
    { icon: <Info size={20} />, text: 'About', path: '/about', color: '#f39c12' },
    { icon: <Image size={20} />, text: 'Gallery', path: '/gallery', color: '#e74c3c' },
    { icon: <Mail size={20} />, text: 'Contact', path: '/contact', color: '#34495e' },
  ];

  return (
    <HeaderWrapper>
      <TopBar>
        <TopBarContent>
          <TopBarItem><MapPin size={16} /> Tandi, Chitwan</TopBarItem>
          <TopBarItem><Phone size={16} />  +977 9846093188</TopBarItem>
          <TopBarItem>
            Educating students since 2069 B.S.
            <SocialIcons>
              <Facebook size={16} />
              <Instagram size={16} />
              <MapPin size={16} />
            </SocialIcons>
          </TopBarItem>
        </TopBarContent>
      </TopBar>
      <MainHeader>
        <MainHeaderContent>
          <Logo to="/">
            <LogoTitle>SunGava Balsansar</LogoTitle>
            {/* <LogoSubtitle>Montessori</LogoSubtitle> */}
          </Logo>
          <NavMenu>
            {menuItems.map((item, index) => (
              <MenuItem key={index} to={item.path} style={{ color: item.color }}>
                {item.text}
              </MenuItem>
            ))}
          </NavMenu>
          <MenuButton onClick={toggleMobileMenu}>
            <Menu />
          </MenuButton>
        </MainHeaderContent>
      </MainHeader>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <LogoTitle style={{ color: 'white', fontSize: '22px' }}>SunGava Balsansar</LogoTitle>
          <X size={24} color="white" onClick={toggleMobileMenu} style={{ cursor: 'pointer' }} />
        </MobileMenuHeader>
        <MobileMenuItems>
          {menuItems.map((item, index) => (
            <MobileMenuItem key={index} to={item.path} onClick={toggleMobileMenu}>
              {item.icon} {item.text}
            </MobileMenuItem>
          ))}
        </MobileMenuItems>
        <MobileMenuFooter>
          <p><Phone size={16} /> +977 9846093188</p>
          <p><MapPin size={16} /> Tandi,Chitwan</p>
          <SocialIcons>
            <Facebook size={20} />
            <Instagram size={20} />
          </SocialIcons>
        </MobileMenuFooter>
      </MobileMenu>
      <Overlay isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </HeaderWrapper>
  );
};

export default HeaderComponent;