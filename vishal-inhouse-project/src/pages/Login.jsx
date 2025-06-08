import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';


const Login = ({ users }) => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const found = users.find(
            (u) => u.username === form.username && u.password === form.password
        );
        if (found) {
            setError('');
            navigate('/Home');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <Navbar authMode="signin" />
            <div className="auth-container">
                <main className="auth-form">
                    <h2>Log in to your account</h2>

                    <label>Username</label>
                    <input
                        name="username"
                        placeholder="Enter your username"
                        value={form.username}
                        onChange={handleChange}
                    />

                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <div className="auth-remember">
                        <label>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                    </div>

                    <button className="btn-primary" onClick={handleLogin}>
                        Log in
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <p>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </main>
            </div>
        </>
    );
};

export default Login;
