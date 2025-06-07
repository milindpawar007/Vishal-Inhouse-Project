import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom styles

const Navbar = () => {
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
                <Link to="/register" className="signup-btn">Sign up</Link>
            </nav>
        </header>
    );
};

export default Navbar;
