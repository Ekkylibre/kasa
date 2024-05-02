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
        <div className="collapse-container">
            <div className="dropdown">
                <div className="collapse-title">
                    <p>{title}</p>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        onClick={toggleCollapse}
                        className={`fa-chevron-up ${isOpen ? 'rotate-down' : 'rotate-up'}`}
                    />
                </div>
                {isOpen && children}
            </div>       
        </div>
    );
}
