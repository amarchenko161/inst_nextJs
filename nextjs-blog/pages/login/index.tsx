import React from "react";
import styles from './Login.module.scss'

const LoginPage = () => {
  return <div className = {styles.containetLogIn}> 
      <div className= {styles.titleLog}>
        Log in
      </div>
      <div className= {styles.btnGroup}>
        <button className= {styles.btnLog}>Log in with Auth0</button>
        <button className= {styles.btnLog}>Log in with e-mail</button>
      </div>
   </div>;
};

export default LoginPage;
