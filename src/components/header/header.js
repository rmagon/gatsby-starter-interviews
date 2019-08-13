// @flow
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-gtag'
import Logo from '../../images/logo.png';

import './header.scss';

type Props = {
  onClick?: Function,
};

class Header extends Component<Props> {

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={Logo} alt="smoopit-logo" height="25px" width="auto" />
            </Link>
          </div>

          <div className="navbar-item">
            <OutboundLink href="mailto:contact@smooper.com" className="button is-primary">
              Get featured here
            </OutboundLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
