import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

const alertWindow = () => {
  window.alert('Coming soon!')
}

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href='mailto:hello@crowdedmind.xyz'>Contact</a>
        </li>
        <li>
          <Link to="#" onClick={alertWindow}>About us</Link>
        </li>
        <li>
          <Link to="#" onClick={alertWindow}>FAQ's</Link>
        </li>
        <li>
          <Link to="#" onClick={alertWindow}>Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;