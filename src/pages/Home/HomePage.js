import React from 'react';

const HomePage = () => (
  <div className="welcome">
    <div className="welcome__wrap">
      <span className="welcome__emoji" role="img" aria-label="sheep">
        👋
      </span>
      <h1 className="welcome__title">Welcome!</h1>
    </div>
    <span className="welcome__text">This is a simple ecommerce app.</span>
  </div>
);

export default HomePage;
