/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { useState } from 'react';
import LoggedIn from '../src/components/LoggedIn/loggedIn';
import LoginForm from '../src/components/LodinForm/login-form';

const App: FC = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default App;
