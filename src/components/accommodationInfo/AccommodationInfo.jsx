import './accommodationInfo.css';

export default function AccommodationInfo({ title, location }) {
  return (
    <div>
        <h2>{title}</h2>
      <p className="accommodation-location">{location}</p>
    </div>
  )
}
