import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'screens/Home';
import AuthCallback from 'screens/AuthCallback';

const router = (
  <main>
    <Route exact path="/" component={Home} />
    <Route path="/callback" component={AuthCallback} />
  </main>
);

export default router;
