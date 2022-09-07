import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Signin from './pages';

import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="478556711739-o3eurncgjtij7saoohe1dmhl5ftu107k.apps.googleusercontent.com">
      <div className="App">
        <Signin />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
