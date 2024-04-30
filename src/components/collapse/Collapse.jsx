import './collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Collapse({ title, isOpen, toggleCollapse, children }) {
    return (
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
    );
}
