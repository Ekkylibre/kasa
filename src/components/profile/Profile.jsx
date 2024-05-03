import './profile.css';

export default function Profile({ host }) {
    return (
        <div className="profile">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
        </div>
    )
}
