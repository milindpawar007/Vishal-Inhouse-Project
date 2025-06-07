import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
// import './Auth.css'; // Optional for styling

const Login = () => {
    return (
        <> <Navbar authMode="signin" />
            <div className="auth-container">


                <main className="auth-form">
                    <h2>Log in to your account</h2>

                    <label>Username</label>
                    <input placeholder="Enter your username" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <div className="auth-remember">
                        <label>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                    </div>

                    <button className="btn-primary">Log in</button>

                    <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                </main>
            </div>
        </>
    );
};

export default Login;
