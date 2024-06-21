import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const gymName = "FitFlex Gym"; // Replace with your gym's name

  return (
    <footer>

      <p>&copy; {currentYear} {gymName}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
