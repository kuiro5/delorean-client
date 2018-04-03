import React, { Component } from 'react';
import { Toolbar, NavLink } from 'rebass';
import AuthService from 'screens/AuthCallback/AuthService';

class Navbar extends Component {
  render() {
    const auth = new AuthService();
    return (
      <Toolbar>
        <NavLink>foo bar</NavLink>
        <NavLink ml="auto" onClick={auth.login}>
          sign in
        </NavLink>
      </Toolbar>
    );
  }
}

export default Navbar;
