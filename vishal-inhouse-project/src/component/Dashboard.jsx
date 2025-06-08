import AccordionPanel from './AccordionPanel';
import './accordion.css';

const Dashboard = () => (
    <div className="page-content">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-sm text-gray-500 mb-4">
            Site: <strong>Test Site · 3021</strong> (Caspia Technologies)
        </p>

        <div className="flex flex-col gap-4">
            <AccordionPanel
                title="Project Activity (0)"
                message="No project activity found."
                defaultOpen={true}
            />
            <AccordionPanel
                title="Analysis Runs (0)"
                message="No recent analysis runs found."
            />
        </div>
    </div>
);

export default Dashboard;
