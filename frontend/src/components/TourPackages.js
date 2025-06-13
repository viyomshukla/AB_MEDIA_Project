import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TourPackage.css';

const TourPackageCard = ({ tourPackage, expanded, onToggle }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img
          src={tourPackage.image}
          alt={tourPackage.title}
          className="card-img"
        />
        <span className="discount-chip">{tourPackage.discount}% OFF</span>
      </div>
      <div className="card-content">
        <h3>{tourPackage.title}</h3>
        <p className="short-desc">{tourPackage.shortDescription}</p>
        <button className="toggle-btn" onClick={onToggle}>
          {expanded ? 'Hide Details' : 'View Details'}
        </button>

        {expanded && (
          <div className="details-box">
            <p><strong>Description:</strong> {tourPackage.description}</p>
            <p><strong>Duration:</strong> {tourPackage.duration}</p>
            <p>
              <strong>Price:</strong> ₹{tourPackage.price.toLocaleString()} <span className="original-price">₹{tourPackage.originalPrice.toLocaleString()}</span>
            </p>
            <p><strong>Rating:</strong> {tourPackage.rating} / 5</p>
            <p><strong>Highlights:</strong> {tourPackage.highlights.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const TourPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('https://ab-media-project-8xsb.vercel.app/api/packages/top-selling');
        setPackages(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tour packages. Please try again later.');
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="packages-section" id="packages">
      <h1>Top Selling Tour Packages</h1>
      <p className="subtitle">Experience the best of India with our carefully curated tour packages</p>
      {error && <div className="error-alert">{error}</div>}
      <div className="grid-container">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => <div className="card skeleton" key={i}></div>)
          : packages.map((tourPackage, idx) => (
              <TourPackageCard
                key={tourPackage.id}
                tourPackage={tourPackage}
                expanded={expandedIdx === idx}
                onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              />
            ))}
      </div>
    </div>
  );
};

export default TourPackages;
