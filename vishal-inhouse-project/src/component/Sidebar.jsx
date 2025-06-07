import {
    FaHome,
    FaFileAlt,
    FaCode,
    FaFolderOpen,
    FaCog,
} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="sidebar">

            <nav className="sidebar-nav">
                <a href="#" className="nav-item active">
                    <FaHome />
                    <span>Dashboard</span>
                </a>
                <a href="#" className="nav-item">
                    <FaFileAlt />
                    <span>Examples</span>
                </a>
                <a href="#" className="nav-item">
                    <FaCode />
                    <span>CODAx</span>
                </a>
                <a href="#" className="nav-item">
                    <FaFolderOpen />
                    <span>Projects</span>
                </a>
                <a href="#" className="nav-item">
                    <FaCog />
                    <span>Settings</span>
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
