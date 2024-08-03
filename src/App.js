import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallary';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const MainContent = styled.main`
  margin-top: 70px; // Adjust this value to match your header's height
  flex: 1;
`;

const StyledFooter = styled.footer`
  // Add any footer styles here
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <StyledHeader>
          <Header />
        </StyledHeader>
        <MainContent>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </AppContainer>
    </Router>
  );
};

export default App;