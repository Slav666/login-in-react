/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { useState } from 'react';
import LoggedIn from '../src/components/LoggedIn/loggedIn';
import LoginFormTest from '../src/components/LodinForm/login-form-test';

const App: FC = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginFormTest setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default App;
