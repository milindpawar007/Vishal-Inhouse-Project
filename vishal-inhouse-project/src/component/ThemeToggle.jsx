import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light';
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-button">
            {darkMode ? <FiMoon size={18} /> : <FiSun size={18} />}
        </button>
    );
};

export default ThemeToggle;
