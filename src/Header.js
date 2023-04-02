import React from 'react';

function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li
            className={props.activeSection === 'home' ? 'active' : ''}
            onClick={() => props.onSectionChange('home')}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={props.activeSection === 'about' ? 'active' : ''}
            onClick={() => props.onSectionChange('about')}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={props.activeSection === 'contact' ? 'active' : ''}
            onClick={() => props.onSectionChange('contact')}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
