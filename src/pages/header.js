import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from './applogo.png';
import { Link } from 'react-router-dom';
export function Header(props) {
  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          {props.showBrand && (
            <div className="brand">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          )}
          {props.showNavList && (
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li>
                  <ScrollLink
                    to="/"
                    smooth={true}
                    duration={10}
                    onClick={handleHomeClick}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={10}
                    data-after="Projects"
                  >
                    About Us
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={10}
                    data-after="Projects"
                  >
                    Features
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={10}
                    data-after="About"
                  >
                    How to Use
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" smooth={true} duration={10}>
                    Contact Us
                  </ScrollLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


