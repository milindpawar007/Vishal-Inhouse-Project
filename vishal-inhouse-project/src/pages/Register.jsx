import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="auth-container">
            <header className="auth-header">
                <h2>API Platform</h2>
                <nav>
                    <a href="#">Documentation</a>
                    <a href="#">API Reference</a>
                    <a href="#">Examples</a>
                    <a href="#">Support</a>
                    <Link to="/" className="btn-outline">Log in</Link>
                </nav>
            </header>

            <main className="auth-form">
                <h2>Create your account</h2>

                <label>Full name</label>
                <input placeholder="Enter your full name" />

                <label>Email</label>
                <input type="email" placeholder="Enter your email" />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" />

                <label>Confirm password</label>
                <input type="password" placeholder="Confirm your password" />

                <button className="btn-primary">Create account</button>

                <p className="tos">By signing up, you agree to our Terms of Service and Privacy Policy</p>
            </main>
        </div>
    );
};

export default Register;
