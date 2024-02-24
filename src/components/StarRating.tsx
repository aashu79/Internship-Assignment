import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars: number = Math.floor(rating / 2);
    const hasHalfStar: boolean = rating % 2 !== 0;

    const stars: JSX.Element[] = [];
    for (let i: number = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: 'gold' }} />);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={fullStars} style={{ color: 'gold' }} />);
    }

    const emptyStars: number = 5 - stars.length;
    for (let i: number = 0; i < emptyStars; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} key={fullStars + i + 1} style={{ color: '#ccc' }} />);
    }

    return <div>{stars}</div>;
};

export default StarRating;
