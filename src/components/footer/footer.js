// @flow
import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo-smooper.png';

import './footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="bottom-bar">
        With <span className="heart">♥</span> by <a href="https://www.smooper.com">smooper.com</a>
        <br/>
        Solve your digital marketing problems through 1 on 1 consultation with experts
      </div>
    </footer>
  );
};

export default Footer;
