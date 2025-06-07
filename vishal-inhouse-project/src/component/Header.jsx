import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className="header">
            <div className="site-title">Test Site · 3021</div>
            <div className="user-section">
                <ThemeToggle />
                <span>Chuck C., Caspia Technologies</span>
                <img src="https://i.pravatar.cc/40" alt="profile" className="avatar" />
            </div>
        </header>
    );
};

export default Header;
