import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router';
import * as Yup from 'yup';
import styles from './Registration.module.scss';

const RegistrationPage = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('First Name is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
  });
const formOptions = { resolver: yupResolver(validationSchema) };

 // get functions to build form with useForm() hook
 const {
 register, handleSubmit, formState
} = useForm(formOptions);
 const { errors } = formState;

  const sendCreateNewUser = async (data) => {
    const { username, email, password } = data;
      try {
        await axios
        .post('http://localhost:8000/auth/registration', {
          email,
          username,
          password,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          Router.push('/');
        });
      } catch {
        console.log('---------->hyevoz');
      }
  };

  return (
    <form onSubmit={handleSubmit(sendCreateNewUser)}>
      <div className={styles.containerReg}>
        <div className={styles.titleReg}>
          Sign up
        </div>
        <div className={styles.btnGroup}>
          Username
          <div className="invalid-feedback">{errors.username?.message}</div>
          <input
            type="text"
            {...register('username')}
            className={styles.btnReg}
            placeholder="Username"
          />
          E-mail
          <div className="invalid-feedback">{errors.email?.message}</div>
          <input
            type="text"
            {...register('email')}
            className={styles.btnReg}
            placeholder="E-mail"
          />
          Password
          <div className="invalid-feedback">{errors.password?.message}</div>
          <input
            type="password"
            {...register('password')}
            className={styles.btnReg}
            placeholder="Password"
          />
          Re-enter password
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
          <input
            type="password"
            {...register('confirmPassword')}
            className={styles.btnReg}
            placeholder="Re password"
          />
        </div>
        <div className={styles.terms}>
          If you click the Sign up button, you are considered
          to agree to the Terms of Use and Privacy Policy.
        </div>
        <div className={styles.btnContainer}>
          <button
            className={styles.btnSing}
            onClick={sendCreateNewUser}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationPage;
