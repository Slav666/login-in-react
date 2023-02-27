import React, { useState } from 'react';
import Card from '../Card/card';
import { useForm } from 'react-hook-form';
import useLoginUser from '~/hooks/useLogin';
import axios from 'axios';
import './login-form.css';

export default function LoginFormTest({ setIsLoggedIn }) {
  const { mutateAsync, status, isLoading } = useLoginUser();

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async userLoginValue => {
    console.log(userLoginValue);
    await mutateAsync(userLoginValue);
    setIsLoggedIn(true);
  });

  return (
    <Card>
      <h1 className="title">Sign In</h1>
      <p className="subtitle">
        Please log in using your username and password!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs_container">
          <input placeholder="Username" type="text" {...register('username')} />

          <input
            placeholder="Password"
            type="password"
            {...register('password')}
          />
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
}
