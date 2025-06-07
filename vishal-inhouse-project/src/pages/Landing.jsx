import Sidebar from '../component/Sidebar';
import Header from '../component/Header';

const Landing = () => {
    return (
        <div className="layout-root">
            <Header />
            <div className="layout-body">
                <Sidebar />
                <div className="page-content">
                    {/* Your page content goes here */}
                </div>
            </div>
        </div>

    );
};

export default Landing;
