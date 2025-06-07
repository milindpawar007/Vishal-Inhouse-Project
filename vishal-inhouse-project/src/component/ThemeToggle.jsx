import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light';
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
