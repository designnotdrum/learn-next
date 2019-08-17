import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Footer from './Footer.jsx';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userIsLoggedIn } = this.props;
    return (
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

Page.propTypes = {
  userIsLoggedIn: PropTypes.bool.isRequired,
};

export default Page;
