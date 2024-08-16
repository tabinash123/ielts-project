import React from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Briefcase, CheckSquare, Users, Settings, HelpCircle, LogOut, GalleryHorizontal, NewspaperIcon } from 'lucide-react';
import { useSelector } from 'react-redux';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f1f5f9;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
`;

const Nav = styled.nav`
  flex-grow: 1;
  margin-top: 24px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: #64748b;
  text-decoration: none;
  &:hover {
    background-color: #f1f5f9;
  }
`;

const NavLinkText = styled.span`
  margin-left: 12px;
`;

const UpgradeSection = styled.div`
  background-color: #f1f5f9;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
`;

const UpgradeTitle = styled.h3`
  font-weight: 600;
`;

const UpgradeDescription = styled.p`
  font-size: 14px;
  color: #64748b;
`;

const UpgradeButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
`;

const BottomLinks = styled.div`
  padding: 16px;
`;

const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const Dashboard = () => {

    const navigate = useNavigate()

    const { username, password } = useSelector(state => state);

    if (!username || !password) {
        return <Navigate to="/login" />;
    }

   
       return (
    <DashboardContainer>
      <Sidebar>
        <Logo>Admin Panel</Logo>
        <Nav>
          {[
            { icon: <GalleryHorizontal size={20} />, label: 'Gallery', link: '/dashboard/gallery' },
            { icon: <NewspaperIcon size={20} />, label: 'Notice', link: '/dashboard/notice' },
            { icon: <NewspaperIcon size={20} />, label: 'Popup Notice', link: '/dashboard/popup-notice' },
          ].map((item, index) => (
            <NavLink key={index} to={item.link}>
              {item.icon}
              <NavLinkText>{item.label}</NavLinkText>
            </NavLink>
          ))}
        </Nav>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </DashboardContainer>
  );





};

export default Dashboard;