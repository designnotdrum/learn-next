import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    return (
      <div>
        <Logo />
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
