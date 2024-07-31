// src/Tooltip.js

import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ username, email, usertype }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="tooltip-container">
      <span 
        className="tooltip-trigger" 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        User Detail
      </span>
      {isVisible && (
        <div className="tooltip-content">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>User Type:</strong> {usertype}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
