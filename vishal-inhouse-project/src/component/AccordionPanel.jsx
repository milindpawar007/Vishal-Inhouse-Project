// components/AccordionPanel.jsx
import React from "react";
import './accordion.css';
const AccordionPanel = ({ title, message, defaultOpen = false }) => {
    return (
        <details className="accordion" open={defaultOpen}>
            <summary className="accordion-summary">
                <p>{title}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="accordion-icon"
                >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
            </summary>
            <p className="accordion-message">{message}</p>
        </details>
    );
};

export default AccordionPanel;
