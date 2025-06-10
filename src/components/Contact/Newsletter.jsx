import React from 'react';
import './newsletter.css';

export default function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <h2>Don't miss out!</h2>
      <p>
        Sign up for the newsletter and never miss a thing again! Projects, offers & much more.
      </p>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="your@email.com" required />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  );
}