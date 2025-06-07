import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ authMode }) => {
    const mode = authMode || "register";
    const authLink = mode === "signin" ? "/register" : "/signin";
    const authText = mode === "signin" ? "Sign up" : "Log in";

    return (
        <header className="navbar">
            <div className="navbar-left">
                <span className="logo-icon">✳</span>
                <h1>API Service</h1>
            </div>
            <nav className="navbar-right">
                <a href="#">Documentation</a>
                <a href="#">API Reference</a>
                <a href="#">Support</a>
                <Link to={authLink} className="signup-btn">{authText}</Link>
            </nav>
        </header>
    );
};

export default Navbar;