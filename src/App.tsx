import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Signin from './pages/Signin';

import './App.css';

function App() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID as string}
    >
      <div className="App">
        <Signin />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
