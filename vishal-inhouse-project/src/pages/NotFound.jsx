import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <header className="navbar">
                <div className="navbar-left">
                    <img
                        src="/Logo.jpg"
                        alt="Logo"
                        className="navbar-logo"
                    />
                    <h1 className="navbar-title">Caspia Technologies</h1>
                </div>
            </header>

            <main className="notfound-content">
                <h1>404</h1>
                <p>Sorry, the page you’re looking for doesn’t exist.</p>
                <Link to="/" className="btn-primary">Go back home</Link>
            </main>
        </div>
    );
};

export default NotFound;
