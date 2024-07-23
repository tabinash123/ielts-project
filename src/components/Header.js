import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Menu, Button, Drawer, Dropdown, Divider } from 'antd';
import { SearchOutlined, DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f2f5;
  padding: 10px 15px;
  height: auto;
  border-bottom: 1px solid #335;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    background-color: white;
    padding: 0 50px;
    height: 80px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e91e63;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid white;
  transform: rotate(90deg);

  @media (min-width: 1024px) {
    display: none;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  line-height: 1;
`;

const Tagline = styled.span`
  font-size: 12px;
  color: #333;
  text-transform: uppercase;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const SearchIcon = styled(SearchOutlined)`
  font-size: 20px;
  color: #333;
  margin-right: 15px;
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #e91e63;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuIcon = styled(MenuOutlined)`
  font-size: 20px;
  color: white;
`;

const CloseIcon = styled(CloseOutlined)`
  font-size: 20px;
  color: white;
`;

const StyledMenu = styled(Menu)`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    background: transparent;
    border-bottom: none;
    justify-content: center;
    flex: 1;
  }
`;

const MenuItem = styled(Menu.Item)`
  font-weight: 500;
  color: #333;
  font-size: 14px;
  &::after {
    display: none;
  }
`;

const DesktopIconsContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

const QuoteButton = styled(Button)`
  background-color: #e91e63;
  border-color: #e91e63;
  font-weight: bold;
  height: 40px;
  padding: 0 20px;
  &:hover,
  &:focus {
    background-color: #d81b60;
    border-color: #d81b60;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    transition: transform 0.3s ease-in-out;
  }
`;

const menuItems = (
  <>
    <MenuItem key="home">
      <Link to="/">HOME</Link>
    </MenuItem>
    <MenuItem key="about">
      <Link to="/about">ABOUT US</Link>
    </MenuItem>
  
    <SubMenu key="services" title={<span>SERVICES <DownOutlined style={{ fontSize: '10px' }} /></span>}>
      <Menu.Item key="service1">Service 1</Menu.Item>
      <Divider />
      <Menu.Item key="service2">Service 2</Menu.Item>
    </SubMenu>
    <SubMenu key="coaching" title={<span>COACHING <DownOutlined style={{ fontSize: '10px' }} /></span>}>
      <Menu.Item key="coaching1">Coaching 1</Menu.Item>
      <Divider />
      <Menu.Item key="coaching2">Coaching 2</Menu.Item>
    </SubMenu>
   
    <MenuItem key="contact">
      <Link to="/contact">CONTACT</Link>
    </MenuItem>
  </>
);

const dropdownItems = (title, items) => (
  <Dropdown overlay={
    <Menu>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Menu.Item>{item}</Menu.Item>
          {index < items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Menu>
  }>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      {title} <DownOutlined />
    </a>
  </Dropdown>
);

const HeaderComponent = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <StyledHeader>
      <Logo>
        <LogoIcon />
        <LogoText>
          <BrandName>ABROAD</BrandName>
        </LogoText>
      </Logo>
      <StyledMenu mode="horizontal" selectedKeys={[]}>
        <MenuItem key="home">
          <Link to="/">HOME</Link>
        </MenuItem>
        <MenuItem key="about">
          <Link to="/about">ABOUT US</Link>
        </MenuItem>
    
        <MenuItem key="services">
          {dropdownItems('SERVICES', ['Service 1', 'Service 2'])}
        </MenuItem>
        <MenuItem key="coaching">
          {dropdownItems('COACHING', ['Coaching 1', 'Coaching 2'])}
        </MenuItem>
       
        <MenuItem key="contact">
          <Link to="/contact">CONTACT</Link>
        </MenuItem>
      </StyledMenu>
      <IconsContainer>
        <SearchIcon />
        <MenuButton onClick={showDrawer}>
          {visible ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </IconsContainer>
      <DesktopIconsContainer>
        <SearchIcon />
        <QuoteButton type="primary">
          FREE QUOTE
        </QuoteButton>
      </DesktopIconsContainer>
      <StyledDrawer
        title={<Logo><LogoIcon><ArrowIcon /></LogoIcon><LogoText><BrandName>ABROAD</BrandName><Tagline>TOURISTS WITH AID</Tagline></LogoText></Logo>}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical">
          {menuItems}
        </Menu>
      </StyledDrawer>
    </StyledHeader>
  );
};

export default HeaderComponent;
