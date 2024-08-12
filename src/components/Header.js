import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Row, Col, Drawer, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { 
  PhoneOutlined, FacebookOutlined, InstagramOutlined, EnvironmentOutlined, MenuOutlined,
  HomeOutlined, InfoCircleOutlined, BookOutlined, TeamOutlined, ToolOutlined, QuestionCircleOutlined, ContactsOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const TopBar = styled.div`
  background-color: #333;
  color: white;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainHeader = styled(Header)`
  background-color: #f8f4e6;
  padding: 10px 20px;
  height: auto;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.span`
  font-size: 28px;
  font-weight: 800;
  color: #4a90e2;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const LogoSubtitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
  &:nth-child(1) { color: #4a90e2; }
  &:nth-child(2) { color: #f39c12; }
  &:nth-child(3) { color: #e74c3c; }
  &:nth-child(4) { color: #2ecc71; }
  &:nth-child(5) { color: #9b59b6; }
  &:nth-child(6) { color: #3498db; }
  &:nth-child(7) { color: #333; }
  &:hover {
    opacity: 0.8;
  }
`;

const MenuButton = styled(Button)`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    background-color: #4a90e2;
    border-bottom: none;
  }
  .ant-drawer-title {
    color: white;
  }
  .ant-drawer-body {
    padding: 0;
    background-color: #f5f5f5;
  }
`;

const DrawerMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  
  &:hover {
    background-color: #e6f7ff;
    color: #4a90e2;
    border-left-color: #4a90e2;
  }

  .anticon {
    font-size: 20px;
    margin-right: 15px;
  }
`;

const DrawerFooter = styled.div`
  padding: 20px;
  background-color: white;
  text-align: center;
  border-top: 1px solid #f0f0f0;
`;

const HeaderComponent = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleDrawerClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { icon: <HomeOutlined />, text: 'Home', path: '/', color: '#4a90e2' },
    { icon: <InfoCircleOutlined />, text: 'About', path: '/about', color: '#f39c12' },
    { icon: <BookOutlined />, text: 'Gallary', path: '/gallery', color: '#e74c3c' },
    { icon: <ContactsOutlined />, text: 'Contact', path: '/contact', color: '#34495e' },
  ];

  return (
    <>
      <TopBar>
        <Row justify="space-between" align="middle" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Col><EnvironmentOutlined /> Chaitya Marg, Lazimpat</Col>
          <Col><PhoneOutlined /> 01 - 400 3564</Col>
          <Col>
            Educating students since 2064 B.S.
            <FacebookOutlined style={{ marginLeft: 10 }} />
            <InstagramOutlined style={{ marginLeft: 10 }} />
            <EnvironmentOutlined style={{ marginLeft: 10 }} />
          </Col>
        </Row>
      </TopBar>
      <MainHeader>
        <Row justify="space-between" align="middle" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Col>
            <Logo>
              <LogoTitle>SunGava</LogoTitle>
              <LogoSubtitle>Montessori</LogoSubtitle>
            </Logo>
          </Col>
          <Col>
            <NavMenu>
              {menuItems.map((item, index) => (
                <MenuItem key={index} to={item.path} style={{ color: item.color }}>{item.text}</MenuItem>
              ))}
            </NavMenu>
            <MenuButton type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </MenuButton>
          </Col>
        </Row>
      </MainHeader>
      <StyledDrawer
        title={<LogoTitle style={{ fontSize: '22px', color: 'white' }}>ANGEL'S KINGDOM</LogoTitle>}
        placement="right"
        onClose={onClose}
        visible={visible}
        width={300}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <DrawerMenuItem to={item.path} style={{ color: item.color }} onClick={handleDrawerClose}>
              {item.icon}
              {item.text}
            </DrawerMenuItem>
            {index < menuItems.length - 1 && <Divider style={{ margin: 0 }} />}
          </React.Fragment>
        ))}
        <DrawerFooter>
          <p><PhoneOutlined /> 01 - 400 3564</p>
          <p><EnvironmentOutlined /> Chaitya Marg, Lazimpat</p>
          <div>
            <FacebookOutlined style={{ fontSize: '20px', margin: '0 10px' }} />
            <InstagramOutlined style={{ fontSize: '20px', margin: '0 10px' }} />
          </div>
        </DrawerFooter>
      </StyledDrawer>
    </>
  );
};

export default HeaderComponent;
