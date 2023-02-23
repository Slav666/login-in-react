import React, { useState, useEffect, useMemo } from 'react';
import './login-form.css';
import Card from '../Card/card';
import axios from 'axios';

const LoginForm = ({ setIsLoggedIn }) => {
  const [query, setQuery] = useState('react');
  const [data, setData] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  //This is needed when you want to use react query
  // const { data: users } = useLoginUser();
  // setQuery = {
  //   username: username,
  //   password: password,
  // };

  const userLoginValue = {
    username: username,
    password: password,
  };

  // const test = useMemo(() => userLoginValue(username, password));

  const errors = {
    username: 'Invalid username',
    password: 'Invalid password',
    noUsername: 'Please enter your username',
    noPassword: 'Please enter your password',
  };

  useEffect(() => {
    async function fetchData() {
      await axios.post('/api/login/', userLoginValue).then(response => {
        console.log('response data', response.data);
        setData(response.data);
      });
    }
    fetchData();
  }, [userLoginValue]);

  const handleInputUserName = e => {
    setUsername(e.target.value);
  };

  const handleInputPassword = e => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('user login value', userLoginValue);
    // await fetchData();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: 'noUsername', message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: 'noPassword', message: errors.noPassword });
      return;
    }
    // const currentUser = data;
    console.log('Data', data);
    if (data) {
      setIsLoggedIn(true);
    }

    // if (data) {
    //   if (data?.password !== password && data?.username !== username) {
    //     // Wrong password
    //     setErrorMessages({ name: 'password', message: errors.password });
    //   } else {
    //     // Correct password, log in user
    //     setErrorMessages({});
    //     setIsLoggedIn(true);
    //   }
    // } else {
    //   // Username doens't exist in the database
    //   setErrorMessages({ name: 'username', message: errors.username });
    // }
  }

  // Render error messages
  const renderErrorMsg = name =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">Sign In</h1>
      <p className="subtitle">
        Please log in using your username and password!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleInputUserName}
          />
          {renderErrorMsg('username')}
          {renderErrorMsg('noUsername')}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputPassword}
          />
          {renderErrorMsg('password')}
          {renderErrorMsg('noPassword')}
        </div>
        <input type="submit" value="Log In" className="login_button" />
        {/* <button onClick={handleSubmit} className="login_button" value="Log In">
        Submit
      </button> */}
      </form>
      <div className="link_container">
        <a href="" className="small">
          Forgot Password?
        </a>
      </div>
    </Card>
  );
};

export default LoginForm;
