import React from "react"
import {useState} from 'react'
import styles from './LoginFormView.module.css'
import Login from "../../components/Login/Login"
import Registration from "../../components/Registration/Registration"
import Header from "../../components/Header/Header"
import ProductItem from './../../components/ProductItem/ProductItem'

const LoginFormView = () => {
    const [isSignIn, setSignIn] = useState(true)

    const changeToSignInValue = () => {
        setSignIn(true)
    }

    const changeToSignUpValue = () => {
        setSignIn(false)
    }
    return <>
        <Header />
        <ProductItem></ProductItem>
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