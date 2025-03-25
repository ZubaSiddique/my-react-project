import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0 }}>
        <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
        <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

