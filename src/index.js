import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'rebass';
import App from 'screens/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
