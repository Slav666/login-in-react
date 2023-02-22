import React, { useState, useEffect } from 'react';
import './login-form.css';
import Card from '../Card/card';
import axios from 'axios';

const LoginForm = ({ setIsLoggedIn }) => {
  const [query, setQuery] = useState();
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

  const errors = {
    username: 'Invalid username',
    password: 'Invalid password',
    noUsername: 'Please enter your username',
    noPassword: 'Please enter your password',
  };

  useEffect(() => {
    function getFetchUrl() {
      return '/api/login/' + query;
    }
    async function fetchData() {
      const result = await axios.post(getFetchUrl());
      setData(result.data);
    }
    fetchData();
  }, [query]);

  const handleSubmit = e => {
    // Prevent page from reloading
    e.preventDefault();
    // submitHandlerTest();
    console.log('user login value', userLoginValue);
    // getAuthUser();
    // axios
    //   .post('/api/login/', userLoginValue)
    //   .then(response => {
    //     console.log('response data', response.data);
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     // setErrorMessages(error);
    //     console.log(error);
    //   });

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
    const currentUser = data;
    console.log('current user', currentUser);
    // Search for user credentials
    // const currentUser = response
    // const currentUser = ?.find(
    //   user => user.username === username && user.password === password,
    // );
    // const currentUser = data;
    // console.log('current user', currentUser);
    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: 'password', message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: 'username', message: errors.username });
    }
  };

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
            onChange={e => setUsername(e.target.value)}
          />
          {renderErrorMsg('username')}
          {renderErrorMsg('noUsername')}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {renderErrorMsg('password')}
          {renderErrorMsg('noPassword')}
        </div>
        <input type="submit" value="Log In" className="login_button" />
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
