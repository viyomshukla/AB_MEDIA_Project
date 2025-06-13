import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Amit Sharma',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    comment: 'TravelEscape made my vacation planning so easy! The destinations were amazing and the booking process was seamless.'
  },
  {
    name: 'Priya Singh',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    comment: 'I loved the curated tour packages. The guides were knowledgeable and the hotels were top-notch! Highly recommended.'
  },
  {
    name: 'Rahul Verma',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    comment: 'A wonderful experience from start to finish. The support team was very responsive and helpful throughout my trip.'
  },
  {
    name: 'Sneha Patel',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    comment: 'The best travel website I have used! The deals were great and everything was perfectly organized.'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section" id='testimonials'>
      <h2>What Our Travelers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="avatar" />
            <h3>{t.name}</h3>
            <p className="comment">"{t.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
