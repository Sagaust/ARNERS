import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialMediaIcons from './SocialMediaIcons';
import SearchBar from './SearchBar';
import NotificationsIcon from './NotificationsIcon';
import ChatSupportIcon from './ChatSupportIcon';
import LanguageDropdown from './LanguageDropdown';

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
