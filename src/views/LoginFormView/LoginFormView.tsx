import React from "react"
import {useState} from 'react'
import styles from './LoginFormView.module.css'
import Login from "../../components/Login/Login"
import Registration from "../../components/Registration/Registration"

const LoginFormView = () => {
    const [isSignIn, setSignIn] = useState(true)

    const changeToSignInValue = () => {
        setSignIn(true)
    }

    const changeToSignUpValue = () => {
        setSignIn(false)
    }
    return <>
        <div className="login-container">
            <div className={styles.loginNav}>
                <button className="btn btn-primary" onClick={changeToSignInValue}>Log in</button>
                <button className="btn btn-primary" onClick={changeToSignUpValue}>Registration</button>
            </div>
            {isSignIn ? <Login /> : <Registration />}
        </div>
    </>
}

export default LoginFormView