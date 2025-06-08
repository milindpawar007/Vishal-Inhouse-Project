import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Dashboard from '../component/Dashboard';
import Product from '../component/Product';

const Landing = () => {
    return (
        <div className="layout-root">
            <Header />
            <div className="layout-body">
                <Sidebar />
                <div className="page-content">
                    <Dashboard />
                    <Product />
                </div>

            </div>
        </div>


    );
};

export default Landing;
