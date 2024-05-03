import './profile.css';

export default function Profile({ host }) {
    return (
        <div className="profile">
            <p className='profile-name'>{host.name}</p>
            <img src={host.picture} alt={host.name} />
        </div>
    )
}
