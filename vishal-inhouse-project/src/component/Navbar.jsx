import { Link } from 'react-router-dom';

const Navbar = ({ authMode }) => {
    const mode = authMode || "register";
    const authLink = mode === "signin" ? "/register" : "/signin";
    const authText = mode === "signin" ? "Sign up" : "Log in";

    return (
        <header className="navbar">
            <div className="navbar-left">
                <img
                    src="/Logo.jpg"
                    alt="Logo"
                    className="navbar-logo"
                />
                <h1 className="navbar-title">API Service</h1>
            </div>
            <nav className="navbar-right">
                <a href="#">Documentation</a>
                <a href="#">API Reference</a>
                <a href="#">Support</a>
                <Link to={authLink} className="signup-btn">
                    {authText}
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
