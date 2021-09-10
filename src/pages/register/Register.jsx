import React from 'react'
import './register.css'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">facebook</h3>
                    <span className="loginDesc">
                        Connect with friends and around the world.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password ?</span>
                        <button className="loginRegisterButton">Have you had an account?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
