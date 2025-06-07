import { useState } from 'react';
import {
    FaTachometerAlt,
    FaBookOpen,
    FaBug,
    FaProjectDiagram,
    FaCog,
    FaHeadset,
    FaSignOutAlt,
    FaChevronDown,
    FaChevronUp,
} from 'react-icons/fa';

const Sidebar = () => {
    const [openCODA, setOpenCODA] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <aside className="sidebar">
            <div className="logo">🌱 Caspia Central</div>
            <nav className="sidebar-nav">
                <a href="#"><FaTachometerAlt /> Dashboard</a>
                <a href="#"><FaBookOpen /> Examples</a>

                <div className="accordion">
                    <div onClick={() => setOpenCODA(!openCODA)} className="accordion-header">
                        <FaBug /> CODAx {openCODA ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openCODA && (
                        <div className="accordion-body">
                            <a href="#">My Experiments</a>
                            <a href="#">Analytics</a>
                        </div>
                    )}
                </div>

                <div className="accordion">
                    <div onClick={() => setOpenProjects(!openProjects)} className="accordion-header">
                        <FaProjectDiagram /> Projects {openProjects ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openProjects && (
                        <div className="accordion-body">
                            <a href="#">Active Projects</a>
                            <a href="#">Archived</a>
                        </div>
                    )}
                </div>

                <div className="accordion">
                    <div onClick={() => setOpenSettings(!openSettings)} className="accordion-header">
                        <FaCog /> Settings {openSettings ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openSettings && (
                        <div className="accordion-body">
                            <a href="#">Profile</a>
                            <a href="#">Permissions</a>
                        </div>
                    )}
                </div>

                <a href="#"><FaHeadset /> Support/Help</a>
                <a href="#"><FaSignOutAlt /> Log out</a>
            </nav>
        </aside>
    );
};

export default Sidebar;
