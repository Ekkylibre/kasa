import './collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                <div className="collapse-title">
                    <p>{title}</p>
                    <FontAwesomeIcon
                        onClick={toggleCollapse}
                        icon={faChevronUp}
                        className={`fa-chevron-up ${isOpen ? 'rotate-down' : 'rotate-up'}`}
                    />
                </div>
                <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                    {children}
                </div>
            </div>
        </>
    );
}