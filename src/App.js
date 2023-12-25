import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import UserContext from './context/userContext';

function App() {
  const context = useContext(UserContext)
  return (
    <React.Fragment>
      <MainHeader  />
      <main>
        {!context.isLoggedIn && <Login  />}
        {context.isLoggedIn && <Home  />}
      </main>
    </React.Fragment>
  );
}

export default App;
