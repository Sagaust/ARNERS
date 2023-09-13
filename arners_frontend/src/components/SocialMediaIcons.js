import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      {/* Add more social media icons here */}
    </div>
  );
};

export default SocialMediaIcons;
