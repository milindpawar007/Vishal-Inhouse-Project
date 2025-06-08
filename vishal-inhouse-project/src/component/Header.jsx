import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-left">
                    <img
                        src="/Logo.jpg"
                        alt="Caspia Logo"
                        className="header-logo"
                    />
                    <span className="site-title">Caspia Central</span>
                </div>
                <div className="header-right">
                    <div className="user-pill">
                        <span className="user-name">Chuck Ronald</span>
                    </div>
                    <div className="theme-toggle-pill">
                        <ThemeToggle />
                    </div>
                    <img src="/Prof_Pic.png" alt="Profile" className="avatar-pill" />
                </div>
            </header>

        </>
    );
};

export default Header;
