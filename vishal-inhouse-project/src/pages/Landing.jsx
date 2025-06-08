import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Dashboard from '../component/Dashboard';
const Landing = () => {
    return (
        <div className="layout-root">
            <Header />
            <div className="layout-body">
                <Sidebar />
                <Dashboard />

            </div>
        </div>


    );
};

export default Landing;
