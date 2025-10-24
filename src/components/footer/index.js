import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Humming Back Buffalo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
