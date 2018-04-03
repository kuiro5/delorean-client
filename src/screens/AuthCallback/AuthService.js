import auth0 from 'auth0-js';
import history from 'utils/history';
import secrets from 'constants/secrets';

const {
  AUTH_AUDIENCE,
  AUTH_CALLBACK,
  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
  AUTH_RESPONSE_TYPE,
  AUTH_SCOPE,
} = secrets;

class AuthService {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: AUTH_DOMAIN,
      clientID: AUTH_CLIENT_ID,
      redirectUri: AUTH_CALLBACK,
      audience: AUTH_AUDIENCE,
      responseType: AUTH_RESPONSE_TYPE,
      scope: AUTH_SCOPE,
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  navigateHome = () => {
    history.replace('/');
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult = {}) => {
      const { accessToken, idToken } = authResult;
      if (accessToken && idToken) {
        this.setSession(authResult);
        this.navigateHome();
      } else if (err) {
        this.navigateHome();
        console.log(err);
      }
    });
  };

  setSession = ({ accessToken, expiresIn, idToken }) => {
    let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.navigateHome();
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.navigateHome();
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };
}

export default AuthService;
