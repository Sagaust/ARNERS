import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMediaIcons from '../components/SocialMediaIcons';
import SearchBar from '../components/SearchBar';
import NotificationsIcon from '../components/NotificationsIcon';
import ChatSupportIcon from '../components/ChatSupportIcon';
import LanguageDropdown from '../components/LanguageDropdown';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header>
        <SearchBar />
        <NotificationsIcon />
        <ChatSupportIcon />
        <LanguageDropdown />
      </Header>
      <main>
        {children}
      </main>
      <Footer>
        <SocialMediaIcons />
      </Footer>
    </div>
  );
};

export default MainLayout;
