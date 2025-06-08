import AccordionPanel from './AccordionPanel';
import './AccordionPanel.css';
import './Dashboard.css';
const Dashboard = () => (
    <details className="collapsible-section" open>
        <summary className="collapsible-summary group">
            <span>Dashboard</span>
            <svg
                className="chevron-icon group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
        </summary>

        <div className="collapsible-content">
            <p className="text-sm text-gray-500 mb-4">
                Site: <strong>Test Site · 3021</strong> (Caspia Technologies)
            </p>

            <div className="flex flex-col gap-4">
                <AccordionPanel
                    title="Project Activity (0)"
                    message="No project activity found."
                    defaultOpen
                />
                <AccordionPanel
                    title="Analysis Runs (0)"
                    message="No recent analysis runs found."
                />
            </div>
        </div>
    </details>

);

export default Dashboard;




