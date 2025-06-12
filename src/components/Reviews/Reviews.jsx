import './reviews.css';
import reviews from './peopleReviews.js';

export default function Reviews(){

    return (
        <div className="reviews-wrapper">
            {reviews.map((review, index) => (
            <div key={index} className="review-card">
                <div className="stars">
                    {"★".repeat(Math.floor(review.rating))}
                    {review.rating % 1 !== 0 && "☆"}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="reviewer">
                    <img src={review.image} alt={review.name} />
                    <div>
                        <strong>{review.name}</strong>
                        <p>{review.role}</p>
                    </div>
                </div>
            </div>
            ))}
    </div>
    )
}