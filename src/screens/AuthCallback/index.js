import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthService from 'screens/AuthCallback/AuthService';

class AuthCallback extends Component {
  constructor() {
    super();
    this.auth = new AuthService();
  }

  componentWillMount() {
    const { location: { hash } } = this.props;
    if (/access_token|id_token|error/.test(hash)) {
      this.auth.handleAuthentication();
    }
  }

  render() {
    return <div>Loading...</div>;
  }
}

AuthCallback.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AuthCallback;
