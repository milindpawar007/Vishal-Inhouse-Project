import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';


const Register = ({ users, addUser }) => {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Add user to users array
        addUser(prevUsers => [
            ...prevUsers,
            {
                fullName,
                email,
                password
            }
        ]);

        navigate('/signin');

        // Optionally, clear form
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <Navbar authMode="register" />
            <div className="auth-container">
                <main>

                    <form onSubmit={handleRegister} className="auth-form">
                        <h2>Create your account</h2>
                        <label>Full name</label>
                        <input
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <label>Confirm password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />

                        <button className="btn-primary" type="submit">Create account</button>
                    </form>
                    <p className="tos">By signing up, you agree to our Terms of Service and Privacy Policy</p>
                </main>
            </div>
        </>
    );
};

export default Register;
