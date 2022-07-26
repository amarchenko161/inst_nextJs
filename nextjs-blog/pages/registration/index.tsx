import React from 'react'
import styles from './Registration.module.scss'

function RegistrationPage() {
  return (
    <div className={styles.containerReg}>
      <div className={styles.titleReg}>
        Sign up
      </div>
      <div className={styles.btnGroup}>
        Username
        <input type='text'
               className={styles.btnReg}
               placeholder='Username'
        />
        E-mail
        <input type='text'
               className={styles.btnReg}
               placeholder='E-mail'
        />
        Password
        <input type='password'
               className={styles.btnReg}
               placeholder='Password'
        />
        Re-enter password
        <input type='password'
               className={styles.btnReg}
               placeholder='Re password'
        />
      </div>
    </div>
  )
}

export default RegistrationPage