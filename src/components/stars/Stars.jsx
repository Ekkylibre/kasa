import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Stars(accommodation) {
    
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: '#FF6060' }} />);
            } else {
                stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: '#E3E3E3' }} />);
            }
        }
        return stars;
    };

  return (
    <div>{renderStars(accommodation.rating)}</div>
  )
}
