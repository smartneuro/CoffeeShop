import React, { useState } from 'react';

function Offers() {
  const [offers, setOffers] = useState([
    { title: 'Summer Special', description: 'Get 20% off all iced coffees!', price: '$10', code: 'SUMMER20' },
    // ... Your offers data
  ]);
  const [showReview, setShowReview] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const [couponCode, setCouponCode] = useState('');

  const handleGrabOffer = (offer) => {
    if (!userDetails.name || !userDetails.email) {
      alert("Please enter your name and email.");
      return;
    }

    setCouponCode(offer.code); // Replace with actual code generation

    setShowReview(true);
  };

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    alert("Thank you for your review!");
    setShowReview(false);
  };

  return (
    <div className="offers">
      <h2>Current Offers</h2>
      <div className="offers-list">
        {offers.map((offer, index) => (
          <div key={index} className="offer-item">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p>Price: {offer.price}</p>
            {!showReview && (
              <button onClick={() => handleGrabOffer(offer)}>Grab Offer</button>
            )}
          </div>
        ))}
      </div>

      {showReview && (
        <div className="review-page">
          <h3>Review Offer</h3>
          <p>Your Coupon Code: {couponCode}</p>
          <form onSubmit={handleSubmitReview}>
            <input type="text" name="name" placeholder="Your Name" value={userDetails.name} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Your Email" value={userDetails.email} onChange={handleInputChange} required />
            <textarea placeholder="Your Review"></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Offers;