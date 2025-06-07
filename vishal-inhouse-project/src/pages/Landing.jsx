import Sidebar from '../component/Sidebar';
import Header from '../component/Header';

const Landing = () => {
    return (
        <div className="landing-layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="page-content">
                    {/* Start building your dashboard here */}
                </div>
            </div>
        </div>

    );
};

export default Landing;
