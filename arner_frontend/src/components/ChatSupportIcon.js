import React, { useState } from 'react';

const ChatSupportIcon = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div className="chat-support-icon">
      <button onClick={toggleChatBox}>
        <i className="fas fa-comments"></i>
      </button>
      {showChatBox && (
        <div className="chat-box">
          <h4>Chat Support</h4>
          <p>Hello! How can we assist you today?</p>
          {/* Add chat box content here */}
        </div>
      )}
    </div>
  );
};

export default ChatSupportIcon;
