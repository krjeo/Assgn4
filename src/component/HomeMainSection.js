import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
    setSelectedReviews(shuffledReviews.slice(0, 2));
  }, []);

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>
          At Pat-Da-Pet, we are on a mission to enrich the lives of pets and their owners.
          We aim to develop and deliver top-quality products and services that ensure their safety, health, and happiness.
          We believe in strengthening the bond between pets and their owners, making their lives together more joyful and fulfilling.
          By embracing sustainable and innovative practices, we are committed to raising the bar in the pet industry,
          always striving to meet and exceed the unique needs of the pets and people we serve.
        </p>
        <button onClick={() => window.location.href = '/products'}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {selectedReviews.map(review => (
          <div key={review.customerName}>
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <p>Rating: {"⭐".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;
