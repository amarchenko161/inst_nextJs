import React, {useState} from "react";
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router'
import * as Yup from 'yup';
import axios from "axios";

const LoginPage = () => {

  const [authOpen, setAuthOpen] = useState(false)

  const validationSchema = Yup.object().shape({ 
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
  });
const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;


  const authLogin = async(data) => {

    const {email, password} = data

    try{
      await axios
        .post("http://localhost:8000/auth/login", {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data);
          Router.push('/')
        });
    } catch {
      console.log('---------->penis');
    }
  }
  
  if (authOpen) return (
    <div className = {styles.containetLogIn}> 
    <div className={styles.titleLog}>
      Log in
    </div>
    <form onSubmit={handleSubmit(authLogin)}>
      <div className={styles.formConatiner}>
        E-mail
        <div className="invalid-feedback">{errors.email?.message}</div>
        <input type='text'
              {...register('email')}                                                                                       
              className={styles.formLog}
              placeholder='E-mail'
        />
        Password
        <div className="invalid-feedback">{errors.password?.message}</div>
        <input type='password'
            {...register('password')}
              className={styles.formLog}
              placeholder='Password'
        />
      
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btnSing} 
              onClick={authLogin}
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>  
  )

  return (
    <div className = {styles.containetLogIn}> 
      <div className={styles.titleLog}>
        Log in
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.btnLog}>Log in with Auth0</button>
        <button className={styles.btnLog} onClick={() => setAuthOpen(!authOpen)}>Log in with e-mail</button>
      </div>
    </div>  
  )
};

export default LoginPage;
